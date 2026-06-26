import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const preservedDownloads = join(tmpdir(), `btfranklin-downloads-${process.pid}`)
if (existsSync('docs/downloads')) {
    cpSync('docs/downloads', preservedDownloads, { preserveTimestamps: true, recursive: true })
}
rmSync('docs', { recursive: true, force: true })
mkdirSync('docs', { recursive: true })
if (existsSync(preservedDownloads)) {
    cpSync(preservedDownloads, 'docs/downloads', { preserveTimestamps: true, recursive: true })
    rmSync(preservedDownloads, { recursive: true, force: true })
}

execFileSync('pdm', ['run', 'build'], {
    cwd: 'resume',
    stdio: 'inherit',
})

execFileSync('npx', ['eleventy'], {
    stdio: 'inherit',
})

execFileSync('npx', ['tailwindcss', '-i', './input.css', '-o', './docs/styles.min.css'], {
    stdio: 'inherit',
})
