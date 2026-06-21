import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, dirname, extname, join, normalize, relative, resolve } from 'node:path'

const scriptDir = dirname(new URL(import.meta.url).pathname)
const tailwindDir = resolve(scriptDir, '..')
const repoRoot = resolve(tailwindDir, '..')
const docsDir = join(repoRoot, 'docs')
const generatedCss = join(docsDir, 'styles.min.css')
const primaryPages = new Set([
    'docs/about.html',
    'docs/experiments.html',
    'docs/index.html',
    'docs/llms-txt.html',
    'docs/notes.html',
])

const errors = []

function repoPath(filePath) {
    return relative(repoRoot, filePath).replaceAll('\\', '/')
}

function addError(filePath, message, line = null) {
    const suffix = line === null ? '' : `:${line}`
    errors.push(`${repoPath(filePath)}${suffix} - ${message}`)
}

function lineForIndex(source, index) {
    return source.slice(0, index).split('\n').length
}

function walkFiles(dir, predicate, files = []) {
    for (const entry of readdirSync(dir)) {
        const fullPath = join(dir, entry)
        const stats = statSync(fullPath)
        if (stats.isDirectory()) {
            walkFiles(fullPath, predicate, files)
        } else if (predicate(fullPath)) {
            files.push(fullPath)
        }
    }
    return files
}

function parseAttributes(tag) {
    const attrs = new Map()
    const attrPattern = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g
    let match
    while ((match = attrPattern.exec(tag)) !== null) {
        attrs.set(match[1].toLowerCase(), match[3] ?? match[4] ?? match[5] ?? '')
    }
    return attrs
}

function isExternalReference(value) {
    return /^(https?:|mailto:|tel:|data:|javascript:)/i.test(value)
}

function stripQueryAndHash(value) {
    return value.split('#')[0].split('?')[0]
}

function resolveLocalReference(filePath, value) {
    const cleanValue = stripQueryAndHash(value)
    if (!cleanValue || cleanValue.startsWith('#')) {
        return null
    }
    if (cleanValue === '/projects.html' || cleanValue === 'projects.html') {
        return null
    }
    if (cleanValue.startsWith('/')) {
        return join(docsDir, cleanValue.slice(1))
    }
    return resolve(dirname(filePath), cleanValue)
}

function localReferenceExists(filePath, value) {
    const target = resolveLocalReference(filePath, value)
    if (target === null) {
        return true
    }
    if (!normalize(target).startsWith(normalize(docsDir))) {
        return false
    }
    if (existsSync(target)) {
        return true
    }
    return existsSync(`${target}.html`) || existsSync(join(target, 'index.html'))
}

function validateFreshCss() {
    const tempDir = mkdtempSync(join(tmpdir(), 'btfranklin-css-'))
    const tempCss = join(tempDir, 'styles.min.css')
    try {
        execFileSync('npx', ['tailwindcss', '-i', './input.css', '-o', tempCss], {
            cwd: tailwindDir,
            stdio: 'pipe',
        })
        const expected = readFileSync(tempCss)
        const actual = readFileSync(generatedCss)
        if (!expected.equals(actual)) {
            addError(generatedCss, 'generated CSS is stale; run npm run build:css from tailwind/')
        }
    } catch (error) {
        errors.push(`tailwind build - failed to generate comparison CSS: ${error.message}`)
    } finally {
        rmSync(tempDir, { recursive: true, force: true })
    }
}

function validateHtmlFile(filePath) {
    const source = readFileSync(filePath, 'utf8')
    const lowerSource = source.toLowerCase()

    if (!/<title>[^<]+<\/title>/i.test(source)) {
        addError(filePath, 'missing non-empty <title>')
    }

    for (const match of source.matchAll(/<style\b[\s\S]*?<\/style>/gi)) {
        addError(filePath, 'inline <style> blocks are not allowed; move styles to tailwind/input.css', lineForIndex(source, match.index))
    }

    for (const match of source.matchAll(/\sstyle\s*=/gi)) {
        addError(filePath, 'inline style attributes are not allowed; use Tailwind utilities', lineForIndex(source, match.index))
    }

    const relativePath = repoPath(filePath)
    if (primaryPages.has(relativePath)) {
        const mainCount = (lowerSource.match(/<main\b/g) ?? []).length
        const h1Count = (lowerSource.match(/<h1\b/g) ?? []).length
        if (mainCount !== 1) {
            addError(filePath, `expected exactly one <main> landmark, found ${mainCount}`)
        }
        if (h1Count < 1) {
            addError(filePath, 'expected at least one <h1>')
        }
    }

    for (const match of source.matchAll(/<a\b[^>]*>/gi)) {
        const attrs = parseAttributes(match[0])
        if ((attrs.get('target') ?? '').toLowerCase() === '_blank') {
            const relTokens = new Set((attrs.get('rel') ?? '').toLowerCase().split(/\s+/).filter(Boolean))
            if (!relTokens.has('noopener') || !relTokens.has('noreferrer')) {
                addError(filePath, 'target="_blank" links must include rel tokens noopener and noreferrer', lineForIndex(source, match.index))
            }
        }
        const href = attrs.get('href')
        if (href && !isExternalReference(href) && !localReferenceExists(filePath, href)) {
            addError(filePath, `local href does not resolve: ${href}`, lineForIndex(source, match.index))
        }
    }

    for (const match of source.matchAll(/<(?:img|script|link)\b[^>]*>/gi)) {
        const attrs = parseAttributes(match[0])
        const ref = attrs.get('src') ?? attrs.get('href')
        if (ref && !isExternalReference(ref) && !localReferenceExists(filePath, ref)) {
            addError(filePath, `local asset reference does not resolve: ${ref}`, lineForIndex(source, match.index))
        }
    }
}

function validateBtfranklinDomain() {
    const files = [
        join(repoRoot, 'AGENTS.md'),
        ...walkFiles(docsDir, (filePath) => ['.html', '.txt', '.js'].includes(extname(filePath))),
    ]
    for (const filePath of files) {
        const source = readFileSync(filePath, 'utf8')
        for (const match of source.matchAll(/btfranklin\.com/gi)) {
            addError(filePath, 'btfranklin.com is invalid; use btfranklin.info', lineForIndex(source, match.index))
        }
    }
}

function validateSitemap() {
    const sitemap = join(docsDir, 'sitemap.txt')
    const lines = readFileSync(sitemap, 'utf8').split(/\r?\n/)
    lines.forEach((line, index) => {
        const url = line.trim()
        if (!url) {
            return
        }
        if (!url.startsWith('https://btfranklin.info/')) {
            addError(sitemap, `sitemap URL must use https://btfranklin.info/: ${url}`, index + 1)
            return
        }
        const pathPart = new URL(url).pathname
        if (!localReferenceExists(sitemap, pathPart)) {
            addError(sitemap, `sitemap URL path does not resolve: ${pathPart}`, index + 1)
        }
    })
}

function validateLlmsTxtLinks() {
    const llms = join(docsDir, 'llms.txt')
    const source = readFileSync(llms, 'utf8')
    for (const match of source.matchAll(/\]\((https:\/\/btfranklin\.info\/[^)]+)\)/g)) {
        const pathPart = new URL(match[1]).pathname
        if (!localReferenceExists(llms, pathPart)) {
            addError(llms, `llms.txt URL path does not resolve: ${pathPart}`, lineForIndex(source, match.index))
        }
    }
}

validateFreshCss()

for (const htmlFile of walkFiles(docsDir, (filePath) => extname(filePath) === '.html')) {
    validateHtmlFile(htmlFile)
}

validateBtfranklinDomain()
validateSitemap()
validateLlmsTxtLinks()

if (errors.length > 0) {
    console.error(`Site validation failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:`)
    for (const error of errors) {
        console.error(`- ${error}`)
    }
    process.exit(1)
}

console.log('Site validation passed.')
