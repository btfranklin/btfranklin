import {
    allPaths,
    branchForStage,
    branchPointsFor,
    breakthroughForecastFor,
    choiceFor,
    headlineEstimates,
    matchesPath,
    normalizePath,
    outcomeFor,
    pathProbability,
    probabilityFor,
    snapshotFor,
    sources,
    storyNodes,
    storyTextFor,
    updatePath,
    validateForecastModel,
} from './forecast-model.js'

const sourceById = new Map(sources.map((source) => [source.id, source]))

const metricDefinitions = [
    {
        key: 'delegatedWork',
        label: 'Digital work owned by AI',
        note: 'Computer-based work machine teams can finish with little help or cleanup.',
        max: 100,
    },
    {
        key: 'researchSpeed',
        label: 'Research capacity',
        note: 'Independent experiments and useful research completed compared with 2026.',
        max: 300,
    },
    {
        key: 'insightReach',
        label: 'Search advantage',
        note: 'Promising ideas found per unit of research compared with 2026. This is the model’s separate allowance for seeing around corners.',
        max: 60,
    },
    {
        key: 'breakthroughs',
        label: 'Breakthroughs in use',
        note: 'Landmark advances since 2026 that have been proved and reached real use. Discoveries still waiting in a lab are excluded.',
        max: 180,
    },
    {
        key: 'healthyYears',
        label: 'Typical healthy lifespan',
        note: 'The model’s expected age before lasting serious disability for a typical American with the care available in that year.',
        max: 140,
    },
    {
        key: 'materialStandard',
        label: 'Median material life',
        note: 'What the typical household can consume and use compared with 2026, after prices and public services.',
        max: 12,
    },
    {
        key: 'housingBurden',
        label: 'Housing burden',
        note: 'The share of a typical household’s resources spent on an ordinary good home. Lower is better.',
        max: 40,
    },
    {
        key: 'physicalCoverage',
        label: 'Physical work done by robots',
        note: 'Real work in factories, roads, homes, and other places.',
        max: 100,
    },
    {
        key: 'riskPressure',
        label: 'Danger level',
        note: 'A 0–100 score based on what AI can do, what it can reach, and how well people can control it.',
        max: 100,
    },
]

let path = pathFromLocation()
let activeIndex = 0
let observer

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')
}

function pct(value) {
    return `${Math.round(value * 100)}%`
}

function displayEstimate(estimate) {
    if (estimate.unit === '×') return `${estimate.central.toFixed(1)}×`
    if (estimate.unit === 'years') return `${estimate.central.toFixed(1)} yrs`
    if (estimate.unit === 'events') return `${Math.round(estimate.central)}`
    if (estimate.unit === 'index') return `${Math.round(estimate.central)}/100`
    return `${Math.round(estimate.central)}%`
}

function displayRange(estimate) {
    if (estimate.unit === '×') {
        return `${estimate.low.toFixed(1)}–${estimate.high.toFixed(1)}×`
    }
    if (estimate.unit === 'index') {
        return `${Math.round(estimate.low)}–${Math.round(estimate.high)}`
    }
    if (estimate.unit === 'years') {
        return `${estimate.low.toFixed(1)}–${estimate.high.toFixed(1)} yrs`
    }
    if (estimate.unit === 'events') {
        return `${Math.round(estimate.low)}–${Math.round(estimate.high)}`
    }
    return `${Math.round(estimate.low)}–${Math.round(estimate.high)}%`
}

function pathKey(candidate) {
    return `${candidate.reliability}-${candidate.acceleration}-${candidate.settlement}`
}

function pathFromLocation() {
    const params = new URLSearchParams(window.location.search)
    return normalizePath({
        reliability: params.get('reliability'),
        acceleration: params.get('acceleration'),
        settlement: params.get('settlement'),
    })
}

function pathHref(candidate) {
    const query = new URLSearchParams(candidate)
    return `?${query.toString()}#forecast`
}

function sourceLinks(ids) {
    const links = ids
        .map((id) => sourceById.get(id))
        .filter(Boolean)
        .map((source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(source.title)}">${escapeHtml(source.publisher)}</a>`)
        .join('')

    return `<div class="source-links" role="group" aria-label="Evidence sources"><span>Evidence</span>${links}</div>`
}

function hiddenPathFields(branchId) {
    return Object.entries(path)
        .filter(([key]) => key !== branchId)
        .map(([key, value]) => `<input type="hidden" name="${key}" value="${escapeHtml(value)}">`)
        .join('')
}

function branchControl(branch) {
    const selected = choiceFor(branch, path)
    const options = branch.options.map((option) => {
        const probability = probabilityFor(branch.id, option.id, path)
        const isSelected = selected === option.id

        return `<label class="branch-option${isSelected ? ' is-selected' : ''}">
            <input type="radio" name="${branch.id}" value="${option.id}"${isSelected ? ' checked' : ''}>
            <span class="branch-option-top"><strong>${escapeHtml(option.label)}</strong><span>${pct(probability)} chance</span></span>
            <span class="probability-track" aria-hidden="true"><span data-probability="${Math.round(probability * 100)}"></span></span>
            <span class="branch-condition">${escapeHtml(option.condition)}</span>
            <span class="branch-consequence">${escapeHtml(option.consequence)}</span>
        </label>`
    }).join('')

    return `<form method="get" action="./" class="branch-form" data-branch-id="${branch.id}">
        ${hiddenPathFields(branch.id)}
        <fieldset>
            <legend>${escapeHtml(branch.question)}</legend>
            <p class="branch-measurement">${escapeHtml(branch.measurement)}</p>
            <div class="branch-options">${options}</div>
            <noscript><button class="apply-path" type="submit">Apply this choice</button></noscript>
        </fieldset>
    </form>`
}

function storyNode(node, index) {
    const branch = node.branchStage ? branchForStage(node.branchStage, path) : undefined
    const paragraphs = node.copy
        .filter((paragraph) => matchesPath(paragraph.when, path))
        .map((paragraph) => `<p>${escapeHtml(paragraph.text)}</p>`)
        .join('')

    return `<article class="story-node" id="${node.id}" data-story-node data-node-index="${index}">
        <div class="story-marker" aria-hidden="true"><span>${node.year}</span></div>
        <h3>${escapeHtml(storyTextFor(node.title, path))}</h3>
        <p class="story-summary">${escapeHtml(storyTextFor(node.summary, path))}</p>
        <div class="story-copy">${paragraphs}</div>
        <details class="mechanism"><summary>What drives this?</summary><p>${escapeHtml(storyTextFor(node.mechanism, path))}</p></details>
        ${branch ? branchControl(branch) : ''}
        <div class="node-footer">${sourceLinks(node.sourceIds)}</div>
    </article>`
}

function renderStory() {
    document.querySelector('.story-column').innerHTML = storyNodes
        .map((node, index) => storyNode(node, index))
        .join('')
}

function rangeMeter(estimate, definition) {
    const start = Math.min(100, (estimate.low / definition.max) * 100)
    const width = Math.min(100 - start, ((estimate.high - estimate.low) / definition.max) * 100)
    const marker = Math.min(100, (estimate.central / definition.max) * 100)
    const label = `${definition.label}: best guess ${displayEstimate(estimate)}, likely range ${displayRange(estimate)}`

    return `<div class="metric-row">
        <div class="metric-heading"><span>${definition.label}</span><strong>${displayEstimate(estimate)}</strong></div>
        <div class="range-track" data-range-start="${start}" data-range-width="${Math.max(width, 2)}" data-range-marker="${marker}" role="img" aria-label="${escapeHtml(label)}">
            <span class="range-band"></span><span class="range-marker"></span>
        </div>
        <small>likely range ${displayRange(estimate)}</small>
    </div>`
}

function renderModelPanel(index = activeIndex) {
    activeIndex = Math.max(0, Math.min(index, storyNodes.length - 1))
    const node = storyNodes[activeIndex]
    const snapshot = snapshotFor(node.year, path)
    const notes = metricDefinitions.map((definition) => `<div><dt>${definition.label}</dt><dd>${definition.note}</dd></div>`).join('')
    const metrics = metricDefinitions.map((definition) => rangeMeter(snapshot[definition.key], definition)).join('')

    document.querySelector('.model-panel').innerHTML = `
        <div class="panel-topline"><span id="model-panel-title" hidden>Story numbers</span><span>Where the story stands</span><span>${String(activeIndex + 1).padStart(2, '0')} / ${String(storyNodes.length).padStart(2, '0')}</span></div>
        <div class="panel-year">${node.year}</div>
        <div class="metrics">${metrics}</div>
        <details class="metric-notes"><summary>What the numbers mean</summary><dl>${notes}</dl></details>`

    applyVisualMeters()
}

function renderHero(outcome) {
    document.querySelector('.hero-scorecard').innerHTML = `<h2 id="headline-estimates-title" hidden>Headline forecast estimates</h2><dl>
        <div><dt>AI owns a full workweek by 2031</dt><dd>${pct(headlineEstimates.weekScaleAutonomyBy2031)}</dd></div>
        <div><dt>Superintelligence exists by 2040</dt><dd>${pct(headlineEstimates.superintelligenceBy2040)}</dd></div>
        <div><dt>Transformative machine science by 2050</dt><dd>${pct(headlineEstimates.transformativeScienceBy2050)}</dd></div>
        <div><dt>Typical healthy lifespan on this path</dt><dd>${displayEstimate(outcome.snapshot.healthyYears)}</dd></div>
        <div><dt>Median material life vs. 2026</dt><dd>${displayEstimate(outcome.snapshot.materialStandard)}</dd></div>
        <div><dt>Resources spent on housing</dt><dd>${displayEstimate(outcome.snapshot.housingBurden)}</dd></div>
    </dl><p class="scorecard-note">My best estimates, based on evidence through 27 July 2026.</p>`
}

function pathRibbon() {
    return branchPointsFor(path).map((branch, index) => {
        const option = branch.options.find((candidate) => candidate.id === choiceFor(branch, path))
        return `<li><span>${String(index + 1).padStart(2, '0')}</span><div><small>${branch.year}</small><strong>${escapeHtml(option.shortLabel)}</strong></div></li>`
    }).join('')
}

function renderOutcome(outcome) {
    const section = document.querySelector('#outcome')
    section.innerHTML = `<div class="outcome-header"><h2 id="outcome-title">${escapeHtml(outcome.name)}</h2><p>${escapeHtml(outcome.subtitle)}</p></div>
        <ol class="path-ribbon">${pathRibbon()}</ol>
        <div class="outcome-numbers">
            <article><span>Chance of this path</span><strong>${pct(outcome.probability)}</strong><p>The chance that all three turning points follow this route.</p></article>
            <article><span>Top-expert digital work</span><strong>${outcome.capabilityMedian}</strong><p>The middle year for broad top-expert computer work.</p></article>
            <article><span>Breakthroughs in real use</span><strong>${displayEstimate(outcome.snapshot.breakthroughs)}</strong><p>Landmark advances since 2026; likely range ${displayRange(outcome.snapshot.breakthroughs)}.</p></article>
            <article><span>Median material life</span><strong>${displayEstimate(outcome.snapshot.materialStandard)}</strong><p>Buying power and public services versus 2026; likely range ${displayRange(outcome.snapshot.materialStandard)}.</p></article>
            <article><span>Typical healthy lifespan</span><strong>${displayEstimate(outcome.snapshot.healthyYears)}</strong><p>Expected age before lasting serious disability; likely range ${displayRange(outcome.snapshot.healthyYears)}.</p></article>
            <article><span>Housing burden</span><strong>${displayEstimate(outcome.snapshot.housingBurden)}</strong><p>Resources spent on an ordinary good home; likely range ${displayRange(outcome.snapshot.housingBurden)}.</p></article>
        </div>
        <div class="outcome-prose"><p>${escapeHtml(outcome.storySummary)}</p><p>The typical household can command about ${displayEstimate(outcome.snapshot.materialStandard)} the material life of 2026, and spends roughly ${displayEstimate(outcome.snapshot.housingBurden)} of its resources on housing. Typical healthy lifespan reaches about ${outcome.snapshot.healthyYears.central.toFixed(0)} years. Those three numbers move separately because discovery, construction, and access follow different clocks.</p></div>
        <button class="secondary-action" type="button">Copy selected outcome</button>`
}

function renderBreakthroughs(outcome) {
    const domains = breakthroughForecastFor(path)
    const cards = domains.map((domain) => `<article><span>${domain.deployedBy2050}</span><div><h3>${escapeHtml(domain.label)}</h3><p>${escapeHtml(domain.examples)}</p><small>Historical prior: ${domain.historicalPerDecade.toFixed(1)} per decade</small></div></article>`).join('')

    document.querySelector('#breakthroughs').innerHTML = `<div class="breakthrough-intro"><h2 id="breakthrough-title">The surprises inside this ending</h2><p>This path carries about ${Math.round(outcome.snapshot.breakthroughs.central)} landmark advances out of the lab and into real use by 2050. Their names cannot be forecast. Their pace, depth, and likely fields can.</p></div><div class="breakthrough-grid">${cards}</div><p class="breakthrough-note">The categories describe where surprises may land; their exact names remain unknowable. A discovery enters the count only after proof and real use.</p>`
}

function renderLeaves() {
    const sortedPaths = allPaths().sort((left, right) => pathProbability(right) - pathProbability(left))
    const cards = sortedPaths.map((candidate, index) => {
        const candidateOutcome = outcomeFor(candidate)
        const selected = pathKey(candidate) === pathKey(path)
        return `<a class="leaf-card${selected ? ' is-selected' : ''}" href="${pathHref(candidate)}" data-path="${pathKey(candidate)}"${selected ? ' aria-current="page"' : ''}>
            <span class="leaf-rank">#${index + 1}</span><strong>${escapeHtml(candidateOutcome.name)}</strong><p>${escapeHtml(candidateOutcome.subtitle)}</p>
            <div><span>${pct(candidateOutcome.probability)}</span><small>${displayEstimate(candidateOutcome.snapshot.healthyYears)} healthy · ${displayEstimate(candidateOutcome.snapshot.housingBurden)} housing</small></div>
        </a>`
    }).join('')

    document.querySelector('.leaf-grid').innerHTML = cards
}

function applyVisualMeters() {
    for (const element of document.querySelectorAll('[data-probability]')) {
        element.style.width = `${element.dataset.probability}%`
    }
    for (const element of document.querySelectorAll('[data-range-start]')) {
        element.style.setProperty('--range-start', `${element.dataset.rangeStart}%`)
        element.style.setProperty('--range-width', `${element.dataset.rangeWidth}%`)
        element.style.setProperty('--range-marker', `${element.dataset.rangeMarker}%`)
    }
}

function observeStory() {
    observer?.disconnect()
    observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => Math.abs(left.boundingClientRect.top) - Math.abs(right.boundingClientRect.top))
        const index = visible[0]?.target.dataset.nodeIndex
        if (index !== undefined && Number(index) !== activeIndex) {
            renderModelPanel(Number(index))
        }
    }, { rootMargin: '-18% 0px -65% 0px', threshold: 0 })

    for (const node of document.querySelectorAll('[data-story-node]')) {
        observer.observe(node)
    }
}

function updateUrl() {
    const url = new URL(window.location.href)
    for (const [key, value] of Object.entries(path)) {
        url.searchParams.set(key, value)
    }
    window.history.replaceState({}, '', url)
}

function render({ updateLocation = true } = {}) {
    const outcome = outcomeFor(path)
    renderHero(outcome)
    renderStory()
    renderModelPanel(activeIndex)
    renderOutcome(outcome)
    renderBreakthroughs(outcome)
    renderLeaves()
    applyVisualMeters()
    observeStory()
    if (updateLocation) updateUrl()
    document.querySelector('.copy-status').textContent = ''
}

function choosePath(nextPath) {
    path = nextPath
    render()
}

async function copyPath() {
    const status = document.querySelector('.copy-status')
    try {
        await navigator.clipboard.writeText(window.location.href)
        status.textContent = 'Path link copied.'
    } catch {
        status.textContent = 'Copy was unavailable. Use the address bar to share this path.'
    }
}

document.addEventListener('change', (event) => {
    const input = event.target.closest('.branch-form input[type="radio"]')
    if (!input) return
    const branchId = input.closest('.branch-form').dataset.branchId
    choosePath(updatePath(path, branchId, input.value))
})

document.addEventListener('click', (event) => {
    const leaf = event.target.closest('.leaf-card[data-path]')
    if (leaf) {
        event.preventDefault()
        const [reliability, acceleration, settlement] = leaf.dataset.path.split('-')
        choosePath(normalizePath({ reliability, acceleration, settlement }))
        document.querySelector('#forecast').scrollIntoView()
        return
    }

    if (event.target.closest('.share-button, .secondary-action, footer button')) {
        copyPath()
    }
})

window.addEventListener('popstate', () => {
    path = pathFromLocation()
    render({ updateLocation: false })
})

validateForecastModel()
render()
