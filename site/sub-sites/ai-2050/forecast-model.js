export const DEFAULT_PATH = {
    reliability: "week",
    acceleration: "bounded",
    settlement: "buildout",
};
export const headlineEstimates = {
    weekScaleAutonomyBy2031: 0.58,
    superintelligenceBy2040: 0.21,
    transformativeScienceBy2050: 0.61,
    historicalLandmarksPer25Years: 18,
};
export const sources = [
    {
        id: "ai2027",
        title: "AI 2027 scenario",
        publisher: "AI Futures Project",
        date: "Apr 2025",
        url: "https://ai-2027.com/",
        grade: "C",
        use: "An influential scenario and presentation reference, not evidence for this forecast.",
    },
    {
        id: "ai2027-q1",
        title: "Q1 2026 timelines update",
        publisher: "AI Futures Project",
        date: "Apr 2026",
        url: "https://blog.aifutures.org/p/q1-2026-timelines-update",
        grade: "C",
        use: "The authors’ latest formal timeline update found during this research.",
    },
    {
        id: "metr-horizon",
        title: "Measuring AI ability to complete long tasks",
        publisher: "METR",
        date: "updated 2026",
        url: "https://metr.org/time-horizons/",
        grade: "B",
        use: "Evidence for rapidly increasing software-task horizons.",
    },
    {
        id: "metr-limits",
        title: "Time-horizon forecast limitations",
        publisher: "METR",
        date: "Jan 2026",
        url: "https://metr.org/notes/2026-01-22-time-horizon-limitations/",
        grade: "A",
        use: "Why benchmark task horizons do not directly measure reliable real-world delegation.",
    },
    {
        id: "metr-rsi",
        title: "The economics of recursive self-improvement",
        publisher: "METR",
        date: "Jul 2026",
        url: "https://metr.org/notes/2026-07-22-economics-of-recursive-self-improvement/",
        grade: "B",
        use: "Compute, experiments, data, and research judgment as limits on feedback loops.",
    },
    {
        id: "stanford-tech",
        title: "AI Index 2026: Technical performance",
        publisher: "Stanford HAI",
        date: "2026",
        url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance",
        grade: "B",
        use: "Current cross-domain capability, benchmark, and robotics evidence.",
    },
    {
        id: "stanford-economy",
        title: "AI Index 2026: Economy",
        publisher: "Stanford HAI",
        date: "2026",
        url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
        grade: "B",
        use: "Adoption, investment, labor-market, and deployment evidence.",
    },
    {
        id: "epoch-scale",
        title: "Can AI scaling continue through 2030?",
        publisher: "Epoch AI",
        date: "2024–26",
        url: "https://epoch.ai/publications/can-ai-scaling-continue-through-2030",
        grade: "B",
        use: "The compute feasibility envelope and its power, chip, data, and capital limits.",
    },
    {
        id: "safety-report",
        title: "International AI Safety Report 2026",
        publisher: "International expert panel",
        date: "2026",
        url: "https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026",
        grade: "B",
        use: "Consensus and disagreement on advanced-system reliability, control, and safeguards.",
    },
    {
        id: "census-ai",
        title: "The microstructure of AI diffusion",
        publisher: "U.S. Census Bureau",
        date: "2026",
        url: "https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html",
        grade: "A",
        use: "Representative evidence that business adoption is broadening but remains shallow.",
    },
    {
        id: "qje-work",
        title: "Generative AI at Work",
        publisher: "Quarterly Journal of Economics",
        date: "2025",
        url: "https://academic.oup.com/qje/article/140/2/889/7990658",
        grade: "A",
        use: "Causal productivity evidence in a structured workplace.",
    },
    {
        id: "ideas-harder",
        title: "Are Ideas Getting Harder to Find?",
        publisher: "American Economic Review",
        date: "Apr 2020",
        url: "https://www.aeaweb.org/articles?id=10.1257%2Faer.20180338",
        grade: "A",
        use: "Research effort has risen much faster than measured progress in several mature fields.",
    },
    {
        id: "disruption-decline",
        title: "Papers and patents are becoming less disruptive over time",
        publisher: "Nature",
        date: "Jan 2023",
        url: "https://www.nature.com/articles/s41586-022-05543-x",
        grade: "A",
        use: "A large-scale warning against multiplying researchers and assuming proportional breakthroughs.",
    },
    {
        id: "enabling-tools",
        title: "Scientific tools and the rate of scientific discovery",
        publisher: "Humanities and Social Sciences Communications",
        date: "Jul 2026",
        url: "https://www.nature.com/articles/s41599-026-06865-1",
        grade: "A",
        use: "A 761-discovery study supporting clustered opportunity windows after enabling tools.",
    },
    {
        id: "alphafold",
        title: "Highly accurate protein structure prediction with AlphaFold",
        publisher: "Nature",
        date: "Jul 2021",
        url: "https://www.nature.com/articles/s41586-021-03819-2",
        grade: "A",
        use: "A fifty-year scientific problem where machine search produced a step change.",
    },
    {
        id: "alphatensor",
        title: "Discovering faster matrix multiplication algorithms with reinforcement learning",
        publisher: "Nature",
        date: "Oct 2022",
        url: "https://www.nature.com/articles/s41586-022-05172-4",
        grade: "A",
        use: "Evidence that machine search can find algorithms beyond long-standing human results.",
    },
    {
        id: "alphadev",
        title: "Faster sorting algorithms discovered using deep reinforcement learning",
        publisher: "Nature",
        date: "Jun 2023",
        url: "https://www.nature.com/articles/s41586-023-06004-9",
        grade: "A",
        use: "Machine-found algorithms that entered a widely used software library.",
    },
    {
        id: "funsearch",
        title: "Mathematical discoveries from program search with large language models",
        publisher: "Nature",
        date: "Dec 2023",
        url: "https://www.nature.com/articles/s41586-023-06924-6",
        grade: "A",
        use: "Evidence that AI-guided search can produce new mathematical constructions.",
    },
    {
        id: "gnome",
        title: "Scaling deep learning for materials discovery",
        publisher: "Nature",
        date: "Nov 2023",
        url: "https://www.nature.com/articles/s41586-023-06735-9",
        grade: "A",
        use: "A dramatic expansion of computationally predicted stable materials, with experimental work still required.",
    },
    {
        id: "a-lab",
        title: "An autonomous laboratory for accelerated synthesis of inorganic materials",
        publisher: "Nature",
        date: "Nov 2023",
        url: "https://www.nature.com/articles/s41586-023-06734-w",
        grade: "A",
        use: "A closed-loop lab synthesized 36 target compounds during 17 days of operation.",
    },
    {
        id: "iea-ai-science",
        title: "How will artificial intelligence transform energy innovation?",
        publisher: "International Energy Agency",
        date: "Nov 2024",
        url: "https://www.iea.org/commentaries/how-will-artificial-intelligence-transform-energy-innovation",
        grade: "A",
        use: "AI can speed materials search while prototyping, manufacturing, and adoption remain separate tasks.",
    },
    {
        id: "iea-diffusion",
        title: "Innovation needs in the Sustainable Development Scenario",
        publisher: "International Energy Agency",
        date: "2020",
        url: "https://www.iea.org/reports/clean-energy-innovation/innovation-needs-in-the-sustainable-development-scenario",
        grade: "A",
        use: "Historical energy technologies often took 20–70 years from prototype to material use.",
    },
    {
        id: "nhgri-sequencing",
        title: "DNA sequencing costs: data",
        publisher: "National Human Genome Research Institute",
        date: "updated 2023",
        url: "https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data",
        grade: "A",
        use: "A historical example of a new technical approach breaking an old cost curve.",
    },
    {
        id: "who-hale",
        title: "Healthy life expectancy in the United States",
        publisher: "World Health Organization",
        date: "data through 2021",
        url: "https://data.who.int/countries/840",
        grade: "A",
        use: "The present-day anchor for typical years lived in full health.",
    },
    {
        id: "gbd-us-hale-2050",
        title: "Burden of disease scenarios by state in the USA, 2022–2050",
        publisher: "The Lancet / GBD collaborators",
        date: "Dec 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11715278/",
        grade: "A",
        use: "The ordinary-progress health baseline; radical paths deliberately move beyond its assumptions.",
    },
    {
        id: "nih-translation",
        title: "Our impact on drug discovery and development",
        publisher: "NIH National Center for Advancing Translational Sciences",
        date: "updated 2026",
        url: "https://ncats.nih.gov/research/our-impact/our-impact-drug-discovery-and-development",
        grade: "A",
        use: "A drug journey can still take up to 15 years.",
    },
    {
        id: "nia-geroscience",
        title: "Fifth Geroscience Summit: Revisiting the Geroscience Hypothesis",
        publisher: "National Institute on Aging",
        date: "2026",
        url: "https://www.nia.nih.gov/research/dab/workshops/fifth-geroscience-summit-revisiting-geroscience-hypothesis-focus-health",
        grade: "A",
        use: "Current gaps in biomarkers, trials, multimorbidity, replacement, and whole-body aging research.",
    },
    {
        id: "reprogramming",
        title: "Mechanisms, pathways and strategies for rejuvenation through epigenetic reprogramming",
        publisher: "Nature Aging",
        date: "Dec 2023",
        url: "https://www.nature.com/articles/s43587-023-00539-2",
        grade: "A",
        use: "Promising cell and animal results, paired with major unanswered safety and translation questions.",
    },
    {
        id: "speech-bci",
        title: "A high-performance speech neuroprosthesis",
        publisher: "Nature",
        date: "Aug 2023",
        url: "https://www.nature.com/articles/s41586-023-06377-x",
        grade: "A",
        use: "An early path from medical neural repair toward elective human augmentation.",
    },
    {
        id: "census-income",
        title: "Income in the United States: 2024",
        publisher: "U.S. Census Bureau",
        date: "Sep 2025",
        url: "https://www.census.gov/library/publications/2025/demo/p60-286.html",
        grade: "A",
        use: "The median-household income baseline.",
    },
    {
        id: "census-housing",
        title: "2024 American Community Survey housing costs",
        publisher: "U.S. Census Bureau",
        date: "Sep 2025",
        url: "https://www.census.gov/newsroom/press-releases/2025/acs-1-year-estimates.html",
        grade: "A",
        use: "The current rent and housing-cost burden baseline.",
    },
    {
        id: "fed-finances",
        title: "Changes in U.S. Family Finances from 2019 to 2022",
        publisher: "Federal Reserve Board",
        date: "Oct 2023",
        url: "https://www.federalreserve.gov/publications/october-2023-changes-in-us-family-finances-from-2019-to-2022.htm",
        grade: "A",
        use: "The ownership gap between homeowners, renters, and wealth groups.",
    },
    {
        id: "fed-wellbeing",
        title: "Economic Well-Being of U.S. Households in 2025",
        publisher: "Federal Reserve Board",
        date: "May 2026",
        url: "https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-executive-summary.htm",
        grade: "A",
        use: "Current household resilience and financial-comfort measures.",
    },
    {
        id: "bls-construction",
        title: "Construction labor productivity",
        publisher: "U.S. Bureau of Labor Statistics",
        date: "Sep 2025",
        url: "https://www.bls.gov/productivity/highlights/construction-labor-productivity.htm",
        grade: "A",
        use: "The uneven productivity record in homebuilding and infrastructure.",
    },
    {
        id: "hud-barriers",
        title: "Eliminating regulatory barriers to affordable housing",
        publisher: "U.S. Department of Housing and Urban Development",
        date: "Jan 2021",
        url: "https://www.huduser.gov/PORTAL/publications/eliminating-regulatory-barriers-to-affordable-housing.html",
        grade: "A",
        use: "Land-use and approval rules as constraints that cheaper construction alone does not remove.",
    },
    {
        id: "science-deliberation",
        title: "AI can help humans find common ground in democratic deliberation",
        publisher: "Science",
        date: "Oct 2024",
        url: "https://doi.org/10.1126/science.adq2852",
        grade: "A",
        use: "A small early example of AI improving a collective decision process.",
    },
    {
        id: "oecd-deliberation",
        title: "Innovative Citizen Participation and New Democratic Institutions",
        publisher: "OECD",
        date: "Jun 2020",
        url: "https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en/full-report.html",
        grade: "A",
        use: "Historical evidence on representative public deliberation and its institutional limits.",
    },
];
const reliabilityBranch = {
    id: "reliability",
    key: "week-test",
    year: 2031,
    question: "Can Maya leave an AI team alone for a full workweek?",
    measurement: "Outside teams give the agents unfamiliar, messy projects. Passing means they finish at least four-fifths of the work, need less than one hour of help for every eight hours they run, and cost less than a human team.",
    options: [
        {
            id: "week",
            label: "The agents own the week",
            shortLabel: "Agents own the week",
            probability: 0.58,
            condition: "They recover from surprises, check one another, and deliver work that people can actually use.",
            consequence: "Whole projects move to machine teams. Research labs can also run thousands of long experiments in parallel.",
        },
        {
            id: "close",
            label: "People still stay close",
            shortLabel: "People stay close",
            probability: 0.42,
            condition: "The agents remain brilliant and brittle. Strange work still needs frequent human judgment.",
            consequence: "AI spreads everywhere, while companies build a thick human layer around it. Specialized science may still race ahead.",
        },
    ],
};
const accelerationBranches = {
    week: {
        id: "acceleration",
        key: "recursive-threshold",
        year: 2036,
        question: "Does machine-led research cross into sustained takeoff?",
        measurement: "A takeoff requires five straight years of accelerating gains. Better systems must improve algorithms, chips, data, and automated experiments fast enough that effective AI research capacity rises more than fiftyfold by 2040.",
        options: [
            {
                id: "takeoff",
                label: "The loop keeps climbing",
                shortLabel: "Research takes off",
                probability: 0.32,
                condition: "Each generation finds better ways to search, test, and build the next one. New limits appear and then fall.",
                consequence: "Superintelligence arrives before institutions are ready. Breakthroughs begin to cascade across fields.",
            },
            {
                id: "bounded",
                label: "The loop finds a ceiling",
                shortLabel: "Acceleration stays bounded",
                probability: 0.68,
                condition: "AI research becomes much faster, but chips, experiments, energy, and stubborn problems keep setting the pace.",
                consequence: "The world gets powerful machine researchers without an abrupt intelligence explosion.",
            },
        ],
    },
    close: {
        id: "acceleration",
        key: "specialist-escape",
        year: 2036,
        question: "Can scientific specialists outrun the general agents?",
        measurement: "A leap means narrow systems repeatedly beat the best human teams in at least three sciences, design their own tests, and raise validated discovery output more than tenfold by 2042—even while office agents still need supervision.",
        options: [
            {
                id: "specialists",
                label: "The laboratories break away",
                shortLabel: "Science specialists leap",
                probability: 0.36,
                condition: "Formal math, protein design, and automated labs give specialized AI clean feedback that everyday work cannot provide.",
                consequence: "Science changes much faster than employment. Medicine becomes the most important race.",
            },
            {
                id: "steady",
                label: "Science keeps a human rhythm",
                shortLabel: "Science stays steady",
                probability: 0.64,
                condition: "AI offers better guesses and faster analysis, while people and physical trials still choose and prove the important ideas.",
                consequence: "Breakthroughs continue and sometimes shock the world. They arrive in a recognizable historical rhythm.",
            },
        ],
    },
};
const settlementBranches = {
    takeoff: {
        id: "settlement",
        key: "intelligence-settlement",
        year: 2042,
        question: "Who gets to use the superintelligence?",
        measurement: "Broad access means ordinary firms, cities, researchers, and households can buy safe intelligence and robotic production near cost. A durable public compact must also prevent any one lab or state from quietly taking control.",
        options: [
            {
                id: "commons",
                label: "Power becomes infrastructure",
                shortLabel: "Intelligence becomes a commons",
                probability: 0.46,
                condition: "Public compute, open technical standards, broad ownership, and shared safety checks survive the first crisis.",
                consequence: "Discovery, production, and medical repair spread quickly. Ordinary scarcity begins to collapse.",
            },
            {
                id: "fortress",
                label: "A frontier bloc keeps the keys",
                shortLabel: "The frontier locks in",
                probability: 0.54,
                condition: "A small alliance controls the strongest systems, factories, and security layer.",
                consequence: "The world becomes astonishingly productive. Access, safety, and political power remain sharply unequal.",
            },
        ],
    },
    bounded: {
        id: "settlement",
        key: "physical-buildout",
        year: 2042,
        question: "Can America build at machine speed?",
        measurement: "A buildout means housing completions exceed four million a year, grid waits fall below three years, and autonomous construction works in ordinary cities across the country.",
        options: [
            {
                id: "buildout",
                label: "The country makes room",
                shortLabel: "America builds",
                probability: 0.55,
                condition: "States approve abundant housing and power, while robots cut the labor and material cost of building.",
                consequence: "The physical world finally catches the digital one. Housing and energy become cheap for most households.",
            },
            {
                id: "bottleneck",
                label: "Scarcity defends itself",
                shortLabel: "Scarcity holds",
                probability: 0.45,
                condition: "Land rules, slow grids, finance, insurance, and local vetoes absorb much of the technical gain.",
                consequence: "AI services become nearly free while homes and good locations keep draining household income.",
            },
        ],
    },
    specialists: {
        id: "settlement",
        key: "aging-platform",
        year: 2042,
        question: "Does aging become a repairable system?",
        measurement: "The stronger path requires a multi-organ treatment to reverse functional decline in large human trials, avoid cancer and immune damage, and enter an adaptive national trial that ordinary patients can join.",
        options: [
            {
                id: "rejuvenation",
                label: "Repair works across the body",
                shortLabel: "Whole-body repair works",
                probability: 0.38,
                condition: "Cell reset, immune renewal, and organ replacement combine into a repeatable treatment platform.",
                consequence: "Healthspan bends sharply upward. Neural and genetic upgrades move from disability care into elective use.",
            },
            {
                id: "clinic",
                label: "Medicine wins disease by disease",
                shortLabel: "Clinics advance piece by piece",
                probability: 0.62,
                condition: "The breakthroughs are real, but whole-body repair remains unsafe or hard to prove.",
                consequence: "Cancer, heart disease, dementia, and organ failure retreat at different speeds. Aging itself remains.",
            },
        ],
    },
    steady: {
        id: "settlement",
        key: "household-bargain",
        year: 2042,
        question: "Does the productivity boom become household security?",
        measurement: "The shared path requires median disposable income to track productivity, housing construction to double, and most households to gain a stake in automated production through wages, funds, services, or a dividend.",
        options: [
            {
                id: "dividend",
                label: "The gains reach the household",
                shortLabel: "The gains are shared",
                probability: 0.48,
                condition: "Voters accept more building and pair automation with broad ownership and strong public services.",
                consequence: "Daily life improves faster than GDP alone would suggest. Time, housing, care, and education become easier to afford.",
            },
            {
                id: "scarcity",
                label: "Owners capture the gain",
                shortLabel: "Ownership stays narrow",
                probability: 0.52,
                condition: "Housing stays restricted and the machines mostly belong to the households and firms already ahead.",
                consequence: "The country grows richer while renters and workers keep feeling squeezed.",
            },
        ],
    },
};
export function branchForStage(stage, path) {
    if (stage === "reliability")
        return reliabilityBranch;
    if (stage === "acceleration") {
        return accelerationBranches[path.reliability];
    }
    return settlementBranches[path.acceleration];
}
export function branchPointsFor(path) {
    return [
        reliabilityBranch,
        accelerationBranches[path.reliability],
        settlementBranches[path.acceleration],
    ];
}
function defaultAcceleration(reliability) {
    return reliability === "week" ? "bounded" : "steady";
}
function defaultSettlement(acceleration) {
    if (acceleration === "takeoff")
        return "fortress";
    if (acceleration === "bounded")
        return "buildout";
    if (acceleration === "specialists")
        return "clinic";
    return "scarcity";
}
function validAcceleration(reliability, acceleration) {
    return accelerationBranches[reliability].options.some((option) => option.id === acceleration);
}
function validSettlement(acceleration, settlement) {
    return settlementBranches[acceleration].options.some((option) => option.id === settlement);
}
export function normalizePath(input) {
    const reliability = input.reliability === "week" || input.reliability === "close"
        ? input.reliability
        : DEFAULT_PATH.reliability;
    const acceleration = validAcceleration(reliability, input.acceleration)
        ? input.acceleration
        : defaultAcceleration(reliability);
    const settlement = validSettlement(acceleration, input.settlement)
        ? input.settlement
        : defaultSettlement(acceleration);
    return { reliability, acceleration, settlement };
}
export function updatePath(path, stage, value) {
    if (stage === "reliability") {
        const reliability = value === "close" ? "close" : "week";
        const acceleration = defaultAcceleration(reliability);
        return {
            reliability,
            acceleration,
            settlement: defaultSettlement(acceleration),
        };
    }
    if (stage === "acceleration") {
        const acceleration = validAcceleration(path.reliability, value)
            ? value
            : defaultAcceleration(path.reliability);
        return {
            ...path,
            acceleration,
            settlement: defaultSettlement(acceleration),
        };
    }
    return {
        ...path,
        settlement: validSettlement(path.acceleration, value)
            ? value
            : defaultSettlement(path.acceleration),
    };
}
export function choiceFor(branch, path) {
    return path[branch.id];
}
function target(central, spread) {
    return { central, spread };
}
const outcomeIdentities = [
    {
        path: {
            reliability: "week",
            acceleration: "takeoff",
            settlement: "commons",
        },
        name: "The abundant century",
        subtitle: "Shared superintelligence opens an age of physical abundance",
        storySummary: "Maya is fifty-six and biologically younger than she was at forty-eight. A good home, expert help, energy, and routine production cost little. Human life is changing on purpose now.",
        profile: {
            delegatedWork: target(98, 2),
            researchSpeed: target(180, 130),
            insightReach: target(35, 24),
            healthyYears: target(112, 24),
            materialStandard: target(8, 4),
            housingBurden: target(5, 3),
            physicalCoverage: target(88, 9),
            riskPressure: target(46, 20),
            breakthroughConversion: 0.3,
            breakthroughSpreadRatio: 0.6,
            breakthroughMix: [0.21, 0.27, 0.2, 0.14, 0.18],
        },
    },
    {
        path: {
            reliability: "week",
            acceleration: "takeoff",
            settlement: "fortress",
        },
        name: "The gated century",
        subtitle: "Superintelligence remakes the world from behind guarded doors",
        storySummary: "Maya is fifty-six in a world of impossible machines and monthly scientific shocks. Her life is richer and longer. The best version of nearly everything still has a gatekeeper.",
        profile: {
            delegatedWork: target(97, 3),
            researchSpeed: target(160, 125),
            insightReach: target(30, 22),
            healthyYears: target(91, 18),
            materialStandard: target(3.5, 1.8),
            housingBurden: target(14, 7),
            physicalCoverage: target(75, 14),
            riskPressure: target(86, 12),
            breakthroughConversion: 0.23,
            breakthroughSpreadRatio: 0.7,
            breakthroughMix: [0.27, 0.24, 0.22, 0.17, 0.1],
        },
    },
    {
        path: {
            reliability: "week",
            acceleration: "bounded",
            settlement: "buildout",
        },
        name: "The great buildout",
        subtitle: "Powerful agents meet cheap energy, construction robots, and permission to build",
        storySummary: "Maya is fifty-six. Phoenix has shaded streets, abundant power, and whole new neighborhoods built in months. The future arrived through a thousand practical breakthroughs.",
        profile: {
            delegatedWork: target(90, 7),
            researchSpeed: target(8, 4),
            insightReach: target(3.5, 1.8),
            healthyYears: target(84, 11),
            materialStandard: target(3, 1.2),
            housingBurden: target(8, 4),
            physicalCoverage: target(70, 13),
            riskPressure: target(38, 16),
            breakthroughConversion: 0.69,
            breakthroughSpreadRatio: 0.48,
            breakthroughMix: [0.22, 0.21, 0.29, 0.11, 0.17],
        },
    },
    {
        path: {
            reliability: "week",
            acceleration: "bounded",
            settlement: "bottleneck",
        },
        name: "The automated squeeze",
        subtitle: "Agents make almost everything easier except access to the physical world",
        storySummary: "Maya is fifty-six. She can summon a hundred experts for pennies. Her children still wonder whether they can afford to live near her.",
        profile: {
            delegatedWork: target(88, 8),
            researchSpeed: target(6, 3),
            insightReach: target(3, 1.5),
            healthyYears: target(78, 9),
            materialStandard: target(2.1, 0.8),
            housingBurden: target(24, 8),
            physicalCoverage: target(48, 14),
            riskPressure: target(44, 17),
            breakthroughConversion: 0.61,
            breakthroughSpreadRatio: 0.5,
            breakthroughMix: [0.28, 0.23, 0.21, 0.12, 0.16],
        },
    },
    {
        path: {
            reliability: "close",
            acceleration: "specialists",
            settlement: "rejuvenation",
        },
        name: "The century of health",
        subtitle: "General AI stays awkward while machine science learns to repair aging bodies",
        storySummary: "Maya is fifty-six and planning for another half-century of healthy work, travel, and reinvention. Her neural link began as therapy. She now keeps it because she likes the larger mind it gives her.",
        profile: {
            delegatedWork: target(76, 12),
            researchSpeed: target(15, 8),
            insightReach: target(8, 4),
            healthyYears: target(102, 23),
            materialStandard: target(2.5, 1),
            housingBurden: target(17, 7),
            physicalCoverage: target(45, 14),
            riskPressure: target(40, 18),
            breakthroughConversion: 0.47,
            breakthroughSpreadRatio: 0.48,
            breakthroughMix: [0.17, 0.44, 0.14, 0.1, 0.15],
        },
    },
    {
        path: {
            reliability: "close",
            acceleration: "specialists",
            settlement: "clinic",
        },
        name: "A medicine of miracles",
        subtitle: "Disease retreats in waves while aging keeps its grip",
        storySummary: "Maya is fifty-six. Several illnesses that frightened her parents have become brief clinic visits. The treatments feel miraculous one at a time, without adding up to youth.",
        profile: {
            delegatedWork: target(72, 12),
            researchSpeed: target(12, 6),
            insightReach: target(6, 3),
            healthyYears: target(86, 12),
            materialStandard: target(2.2, 0.9),
            housingBurden: target(21, 8),
            physicalCoverage: target(40, 13),
            riskPressure: target(34, 16),
            breakthroughConversion: 0.46,
            breakthroughSpreadRatio: 0.48,
            breakthroughMix: [0.18, 0.42, 0.16, 0.1, 0.14],
        },
    },
    {
        path: {
            reliability: "close",
            acceleration: "steady",
            settlement: "dividend",
        },
        name: "The shared upgrade",
        subtitle: "Steady progress compounds into a calmer, more secure life",
        storySummary: "Maya is fifty-six. She still works with people and machines, usually four days a week. A public fund, abundant homes, and cheaper care have made ordinary setbacks less frightening.",
        profile: {
            delegatedWork: target(64, 13),
            researchSpeed: target(3.5, 1.5),
            insightReach: target(2, 0.8),
            healthyYears: target(79, 9),
            materialStandard: target(2, 0.7),
            housingBurden: target(13, 6),
            physicalCoverage: target(42, 12),
            riskPressure: target(28, 14),
            breakthroughConversion: 0.77,
            breakthroughSpreadRatio: 0.46,
            breakthroughMix: [0.2, 0.27, 0.18, 0.1, 0.25],
        },
    },
    {
        path: {
            reliability: "close",
            acceleration: "steady",
            settlement: "scarcity",
        },
        name: "A richer, tighter world",
        subtitle: "The inventions arrive while ownership and housing stay stuck",
        storySummary: "Maya is fifty-six. Her AI is better than any assistant she imagined in 2026. Life is longer and goods are cheaper. Rent, care, and a fragile claim on the future still organize the family calendar.",
        profile: {
            delegatedWork: target(58, 14),
            researchSpeed: target(2.5, 1),
            insightReach: target(1.6, 0.6),
            healthyYears: target(73, 7),
            materialStandard: target(1.55, 0.45),
            housingBurden: target(29, 8),
            physicalCoverage: target(28, 10),
            riskPressure: target(35, 15),
            breakthroughConversion: 0.71,
            breakthroughSpreadRatio: 0.48,
            breakthroughMix: [0.24, 0.29, 0.17, 0.11, 0.19],
        },
    },
];
export const storyNodes = [
    {
        id: "last-normal-monday",
        year: 2026,
        title: "The last normal Monday",
        summary: "Maya’s AI saves a morning and nearly loses a month. Both facts will matter.",
        copy: [
            {
                text: "Maya Torres is an operations manager in Phoenix. On Monday she asks an AI agent to compare forty supplier bids, rewrite the shipping plan, and warn her about anything strange. Eleven minutes later, a polished answer lands on her screen.",
            },
            {
                text: "The plan is clever. It also sends a critical part through a port that cannot legally accept it. Maya catches the error late that afternoon. Her boss sees five hours saved. Maya sees the month they almost lost.",
            },
            {
                text: "Outside her office, the world already feels unlike 2002. A human genome that once cost tens of millions of dollars can be read for roughly a thousand. A machine has cracked a fifty-year protein puzzle. The next twenty-four years will not move in a straight line.",
            },
        ],
        mechanism: "Capability can rise quickly while reliability lags. Long tasks multiply the chances for one small mistake to spoil the result.",
        sourceIds: [
            "metr-horizon",
            "metr-limits",
            "nhgri-sequencing",
            "alphafold",
        ],
    },
    {
        id: "second-staff",
        year: 2028,
        title: "The office grows a second staff",
        summary: "Every employee can call a roomful of agents. Work begins to split between what is easy to check and what still needs a person’s name.",
        copy: [
            {
                text: "Maya starts each day with a lead agent. It sends smaller agents to chase invoices, test software, study delays, and draft customer calls. Six people now launch work that once needed twenty.",
            },
            {
                text: "Luis, Maya’s younger brother, enters the job market just as the first rung of the career ladder disappears. Research, drafting, and routine analysis belong to machines. He finds work handling angry customers and odd cases—the jobs where being accountable matters as much as being right.",
            },
            {
                text: "The strongest models live in expensive data centers. Last year’s intelligence is cheap enough to be everywhere. That gap gives a few companies enormous power and gives everyone else an astonishing tool.",
            },
        ],
        mechanism: "Digital tools spread faster than factories or homes. Firms adopt them deeply only when the results survive real work and the cleanup stays small.",
        sourceIds: [
            "stanford-tech",
            "stanford-economy",
            "census-ai",
            "qje-work",
            "epoch-scale",
        ],
    },
    {
        id: "week-test",
        year: 2031,
        title: "The week with no one watching",
        summary: "Maya gives an AI team a live project, a company credit card, and five days without rescue.",
        copy: [
            {
                text: "The agents must fix a software failure, reroute two shipments, negotiate with suppliers, and explain every choice on Friday. Judges count finished work, hidden damage, and every minute a human spends helping.",
            },
            {
                text: "A pass would turn agents into a workforce. A failure would still leave Maya with the best tool she has ever used—and a reason to keep her hand near the wheel.",
            },
        ],
        mechanism: "This test asks whether reliability grows with skill. It also changes the research world: agents that can own a week can run long chains of experiments on themselves.",
        sourceIds: ["metr-horizon", "metr-limits", "safety-report"],
        branchStage: "reliability",
    },
    {
        id: "work-rewritten",
        year: 2034,
        title: [
            {
                when: { reliability: "week" },
                text: "The company learns to sleep",
            },
            {
                when: { reliability: "close" },
                text: "Every agent gets a shadow",
            },
        ],
        summary: [
            {
                when: { reliability: "week" },
                text: "The agents pass. Maya’s company begins work on Monday morning before any person wakes up.",
            },
            {
                when: { reliability: "close" },
                text: "The agents fail in three strange ways. Maya’s company keeps them everywhere and adds people to watch the edges.",
            },
        ],
        copy: [
            {
                when: { reliability: "week" },
                text: "Maya leaves her phone in a hotel safe for the first time in years. At home, agents settle routine contracts, repair common bugs, and move shipments around a storm. One person watches hundreds of machine workers. The office becomes a place where people choose goals and settle exceptions.",
            },
            {
                when: { reliability: "close" },
                text: "Maya still takes the vacation. Each morning she checks a red dashboard. The agents are brilliant on familiar ground and strangely helpless one step outside it. Companies hire fewer beginners, more reviewers, and people who can carry legal blame.",
            },
            {
                when: { reliability: "week" },
                text: "The same pattern reaches laboratories. Machine teams read every paper they can access, write code overnight, and keep experiments running through weekends. Research capacity begins to grow much faster than the number of human scientists.",
            },
            {
                when: { reliability: "close" },
                text: "Science gets a different bargain. General agents still wander, but a protein model or theorem prover works inside a narrow world with clear tests. The best specialists begin pulling away from their unreliable cousins.",
            },
        ],
        mechanism: [
            {
                when: { reliability: "week" },
                text: "Reliable delegation multiplies labor and shortens feedback loops. The largest gains appear where results can be checked by software or automated instruments.",
            },
            {
                when: { reliability: "close" },
                text: "Specialized systems can make superhuman progress before general agents are trustworthy. Formal proofs and laboratory measurements provide cleaner feedback than office life.",
            },
        ],
        sourceIds: [
            "census-ai",
            "qje-work",
            "alphatensor",
            "alphadev",
            "a-lab",
        ],
    },
    {
        id: "acceleration-test",
        year: 2036,
        title: [
            {
                when: { reliability: "week" },
                text: "The machines turn toward themselves",
            },
            {
                when: { reliability: "close" },
                text: "The specialists look for a way around",
            },
        ],
        summary: [
            {
                when: { reliability: "week" },
                text: "Maya watches an agent fix a flaw in its own planning software and rerun a week of work before her coffee cools. The next question is whether that pace keeps climbing.",
            },
            {
                when: { reliability: "close" },
                text: "When a warehouse cooler fails, Maya’s office agent gets lost in the repair manual; a narrow engineering system finds the cracked valve in minutes. Specialized systems may have found a cleaner road through science.",
            },
        ],
        copy: [
            {
                when: { reliability: "week" },
                text: "Each successful idea gives the next research team a stronger starting mind. The easy gains come first. Then the loop reaches the hard parts: power, chip factories, scientific taste, experiments, and data that do not yet exist.",
            },
            {
                when: { reliability: "close" },
                text: "A chemistry agent cannot calm an angry customer. It can still plan ten thousand reactions, send the best hundred to robot benches, and learn from every failure. A proof system cannot run Maya’s company. It can search a mathematical space no person could hold in mind.",
            },
        ],
        mechanism: "More research effort helps, but mature fields have often required much more effort to maintain the same rate of progress. Machine search adds a second force: it can explore useful directions people never thought to try.",
        sourceIds: [
            "metr-rsi",
            "ideas-harder",
            "disruption-decline",
            "alphatensor",
            "funsearch",
            "gnome",
        ],
        branchStage: "acceleration",
    },
    {
        id: "surprise-weather",
        year: 2040,
        title: [
            {
                when: { acceleration: "takeoff" },
                text: "The calendar catches fire",
            },
            {
                when: { acceleration: "bounded" },
                text: "The surprise comes through the drill bit",
            },
            {
                when: { acceleration: "specialists" },
                text: "The old body answers back",
            },
            {
                when: { acceleration: "steady" },
                text: "The quiet decade still has thunder",
            },
        ],
        summary: [
            {
                when: { acceleration: "takeoff" },
                text: "A better way to build intelligence unlocks several other fields at once. Breakthroughs that once arrived years apart begin arriving weeks apart.",
            },
            {
                when: { acceleration: "bounded" },
                text: "There is no intelligence explosion. A machine-designed drilling system still turns deep heat beneath most cities into cheap, steady power.",
            },
            {
                when: { acceleration: "specialists" },
                text: "A machine-led biology team safely resets several aging systems in large animals. The result is too strong to dismiss and too early to trust.",
            },
            {
                when: { acceleration: "steady" },
                text: "Progress stays recognizable until two unrelated results—a durable immune reset and carbon-negative cement—land in the same summer.",
            },
        ],
        copy: [
            {
                when: { acceleration: "takeoff" },
                text: "The first shock is an algorithm that learns more from every experiment while using far less compute. The stronger system then designs its own chips, finds a compact proof that changes error correction, and points materials labs toward a new class of power electronics. Each result widens the search behind the next.",
            },
            {
                when: { acceleration: "takeoff" },
                text: "Maya’s warehouse replaces its cooling system twice in one year because each machine-designed version makes the last one obsolete. By autumn, no human can follow the whole research front. The systems are finding ideas faster than laboratories can prove them.",
            },
            {
                when: { acceleration: "bounded" },
                text: "During a 118-degree week, Maya’s block stays cool on power drawn from hot rock three miles below. Agents found a drill shape and control method that human teams had missed. Cheap firm power makes cooling, water, compute, and factory heat easier. Grid connections and zoning still move at human speed.",
            },
            {
                when: { acceleration: "specialists" },
                text: "The treatment combines a short cell reset, immune cleanup, and custom-grown tissue. Old animals regain strength without the tumors that ruined earlier attempts. Maya and Luis stay up past midnight deciding whether to join the first human trial.",
            },
            {
                when: { acceleration: "steady" },
                text: "After the immune reset, Luis goes a full summer without the flare that used to cost him weeks. Across town, a new apartment building locks carbon into its concrete while using less energy. History keeps producing shocks even when the overall curve looks calm.",
            },
            {
                text: "The exact inventions in this scene are uncertain. The model gives each path a rate of landmark surprises, then asks how many can be tested, built, and shared before 2050.",
            },
        ],
        mechanism: [
            {
                when: { acceleration: "takeoff" },
                text: "Research scale and machine insight reinforce one another. General discoveries also spill into other fields, creating clusters instead of evenly spaced progress.",
            },
            {
                when: { acceleration: "bounded" },
                text: "AI can search design spaces far beyond human intuition without becoming all-powerful. Physical deployment still follows its own clock.",
            },
            {
                when: { acceleration: "specialists" },
                text: "Biology offers huge search spaces and measurable feedback. Whole-body repair still needs long trials because the same mechanisms that renew cells can also cause cancer.",
            },
            {
                when: { acceleration: "steady" },
                text: "A steady average hides lumpy arrivals. Independent breakthroughs sometimes land together and change more than the trend line suggests.",
            },
        ],
        sourceIds: [
            "alphafold",
            "alphatensor",
            "funsearch",
            "a-lab",
            "enabling-tools",
            "iea-ai-science",
            "reprogramming",
            "nih-translation",
        ],
    },
    {
        id: "settlement-test",
        year: 2042,
        title: [
            {
                when: { acceleration: "takeoff" },
                text: "The most valuable key in history",
            },
            {
                when: { acceleration: "bounded" },
                text: "The perfect home meets the permit desk",
            },
            {
                when: { acceleration: "specialists" },
                text: "One trial could redraw a lifetime",
            },
            {
                when: { acceleration: "steady" },
                text: "The country argues over the dividend",
            },
        ],
        summary: [
            {
                when: { acceleration: "takeoff" },
                text: "Superintelligence can now design treatments, factories, weapons, and better versions of itself. The fight turns to access and control.",
            },
            {
                when: { acceleration: "bounded" },
                text: "Robots can build a home with a fraction of the labor. Whether they may build millions is a political choice.",
            },
            {
                when: { acceleration: "specialists" },
                text: "The first human repair trial works well enough to force a choice about how much risk society will take to learn faster.",
            },
            {
                when: { acceleration: "steady" },
                text: "AI has made the country richer. Voters decide whether the gain becomes cheaper essentials and broad ownership.",
            },
        ],
        copy: [
            {
                when: { acceleration: "takeoff" },
                text: "Maya and Luis wait six hours to speak at a hearing on whether the public should own part of the system that redesigned her warehouse. Frontier systems can see discoveries, security failures, and political moves before most people know where to look. The labs demand tight control.",
            },
            {
                when: { acceleration: "bounded" },
                text: "Maya tours a model home that took six days to finish, then learns the subdivision may wait four years for water. Cheap geothermal and storage can power whole new districts. City councils still control the land, utilities, and permits.",
            },
            {
                when: { acceleration: "specialists" },
                text: "Maya signs the first page of a repair-trial consent form, then stops at the paragraph about abnormal cell growth. A national adaptive trial could learn quickly across millions of volunteers. The old approval path would move more slowly and expose fewer people at once.",
            },
            {
                when: { acceleration: "steady" },
                text: "At a neighborhood meeting, Luis uses the planning tool to show two thousand new homes on his block, then watches the room split over whether to build them. Congress can also send every citizen a share of an automation fund. Owners, workers, renters, and local governments still want different futures.",
            },
        ],
        mechanism: "At this point the hardest uncertainty depends on the path already taken. Control dominates a takeoff world. Building dominates physical abundance. Clinical proof dominates rejuvenation. Ownership dominates steady growth.",
        sourceIds: [
            "safety-report",
            "bls-construction",
            "hud-barriers",
            "iea-diffusion",
            "nia-geroscience",
            "science-deliberation",
            "oecd-deliberation",
            "fed-finances",
        ],
        branchStage: "settlement",
    },
    {
        id: "world-arrives",
        year: 2046,
        title: [
            {
                when: { settlement: "commons" },
                text: "Intelligence falls to the price of power",
            },
            {
                when: { settlement: "fortress" },
                text: "The world queues at the gate",
            },
            {
                when: { settlement: "buildout" },
                text: "Phoenix builds another Phoenix",
            },
            {
                when: { settlement: "bottleneck" },
                text: "The robots wait for permits",
            },
            {
                when: { settlement: "rejuvenation" },
                text: "Maya’s biological clock turns back",
            },
            {
                when: { settlement: "clinic" },
                text: "The miracles come one organ at a time",
            },
            {
                when: { settlement: "dividend" },
                text: "Friday belongs to Maya again",
            },
            {
                when: { settlement: "scarcity" },
                text: "Everything is cheap except a life",
            },
        ],
        summary: [
            {
                when: { settlement: "commons" },
                text: "Safe superintelligence, automated production, and public ownership turn basic material comfort into infrastructure.",
            },
            {
                when: { settlement: "fortress" },
                text: "Scientific wonders pour out of the frontier bloc. Access arrives through licenses, waiting lists, and loyalty.",
            },
            {
                when: { settlement: "buildout" },
                text: "Cheap power and autonomous construction remake America’s fastest-growing cities.",
            },
            {
                when: { settlement: "bottleneck" },
                text: "Technical costs collapse. Legal and positional scarcity keep the final price high.",
            },
            {
                when: { settlement: "rejuvenation" },
                text: "A repair treatment gives Maya back strength, sleep, and immune function she had slowly lost.",
            },
            {
                when: { settlement: "clinic" },
                text: "Medicine defeats several killers without finding one switch for aging.",
            },
            {
                when: { settlement: "dividend" },
                text: "Broad ownership and abundant housing turn higher productivity into time.",
            },
            {
                when: { settlement: "scarcity" },
                text: "Digital luxury surrounds households that remain one rent increase from trouble.",
            },
        ],
        copy: [
            {
                when: { settlement: "commons" },
                text: "A city can ask for a cooler street, a safer water system, or ten thousand homes and receive tested designs by morning. Robot fleets do the work. New power systems feed them. Maya pays more for a handmade chair than for a month of energy and machine expertise.",
            },
            {
                when: { settlement: "commons" },
                text: "Medicine moves from treating disease toward maintaining a body. Cell repair, replacement organs, and neural links become ordinary options. Some people remain fully biological. Others choose stronger senses, longer attention, or a direct link to machine memory.",
            },
            {
                when: { settlement: "fortress" },
                text: "The frontier bloc cures rare diseases, builds silent factories, and predicts storms months ahead. Maya receives an excellent heart repair through her employer. A richer client receives a whole-body treatment unavailable on the public plan.",
            },
            {
                when: { settlement: "fortress" },
                text: "Housing construction is cheap wherever the bloc owns land and grants access. Good neighborhoods become membership goods. The physical plenty is real, and so is the gate.",
            },
            {
                when: { settlement: "buildout" },
                text: "Maya takes a fast train to Luis’s new neighborhood, built on land that was empty desert three years earlier. Shaded courtyards, water-recycling blocks, and local automated plants keep the district cool and cheap. Robot crews are already building the next one.",
            },
            {
                when: { settlement: "buildout" },
                text: "The same practical abundance reaches clinics. Cheap diagnostics and a stream of validated treatments push serious illness later. Maya expects more healthy decades than her parents had reason to imagine.",
            },
            {
                when: { settlement: "bottleneck" },
                text: "Maya can generate a perfect home design for free. The parcel, approval, grid connection, insurance, and loan still cost years. Construction robots sit idle near cities that allow only a thin stream of new homes.",
            },
            {
                when: { settlement: "bottleneck" },
                text: "Her household is rich in intelligence and short on space. Premium locations remain scarce by nature. Ordinary housing remains scarce by choice.",
            },
            {
                when: { settlement: "rejuvenation" },
                text: "Maya enters the repair clinic at fifty-two. Six months later her immune age, grip strength, and recovery time resemble her late thirties. The treatment is imperfect and must be repeated. For the first time, aging feels like maintenance.",
            },
            {
                when: { settlement: "rejuvenation" },
                text: "Her speech implant began as protection against a family nerve disease. The upgraded version gives her silent access to tools and memory. The line between medicine and human redesign becomes personal.",
            },
            {
                when: { settlement: "clinic" },
                text: "A scan finds an early cancer in Maya. Her personalized vaccine clears it before she misses a month of work. Lab-grown kidneys end most transplant lists, and a monthly immune treatment delays dementia for many patients. Together, the treatments give Maya years her parents did not get.",
            },
            {
                when: { settlement: "dividend" },
                text: "Maya works four days because she wants to, not because the company lacks work. Her automation fund pays a modest monthly dividend. New homes, public clinics, and nearly free tutoring stretch it further than its dollar value suggests.",
            },
            {
                when: { settlement: "dividend" },
                text: "AI-assisted public meetings help neighborhoods argue over real choices instead of dueling rumors. Politics remains politics. It becomes slightly better at turning technical plenty into permission.",
            },
            {
                when: { settlement: "scarcity" },
                text: "Luis has a world-class tutor, lawyer, doctor’s assistant, and studio inside his phone. He also spends almost a third of his income on a small apartment. The machines made many things abundant. They did not give him a claim on the land or the machines.",
            },
        ],
        mechanism: [
            {
                when: { settlement: "commons" },
                text: "When intelligence, energy, robotics, and broad access arrive together, each removes a bottleneck for the others. Unique land and human attention remain scarce.",
            },
            {
                when: { settlement: "fortress" },
                text: "Concentrated control can produce rapid technical progress while limiting diffusion. The median household receives cheaper goods without equal power or access.",
            },
            {
                when: { settlement: "buildout" },
                text: "Housing becomes cheap when construction productivity, energy, land permission, infrastructure, and finance all move together.",
            },
            {
                when: { settlement: "bottleneck" },
                text: "Automation attacks structure costs. Land, approvals, utilities, insurance, and location can still set the market price.",
            },
            {
                when: { settlement: "rejuvenation" },
                text: "Aging affects many linked systems. A validated repair platform produces larger gains than treating diseases one at a time, with equally large safety stakes.",
            },
            {
                when: { settlement: "clinic" },
                text: "Faster discovery still passes through human trials and clinical adoption. Several successful treatments can add up to a large population gain.",
            },
            {
                when: { settlement: "dividend" },
                text: "Households experience abundance through prices, services, time, and ownership. Institutions decide how productivity crosses that bridge.",
            },
            {
                when: { settlement: "scarcity" },
                text: "Cheap digital goods do little to reduce the price of constrained essentials. Narrow ownership weakens the link between national output and median security.",
            },
        ],
        sourceIds: [
            "iea-diffusion",
            "bls-construction",
            "hud-barriers",
            "who-hale",
            "gbd-us-hale-2050",
            "nia-geroscience",
            "reprogramming",
            "speech-bci",
            "census-housing",
            "fed-finances",
            "science-deliberation",
        ],
    },
    {
        id: "horizon",
        year: 2050,
        title: outcomeIdentities.map(({ path, name }) => ({
            when: path,
            text: name,
        })),
        summary: outcomeIdentities.map(({ path, storySummary }) => ({
            when: path,
            text: storySummary,
        })),
        copy: [
            {
                when: {
                    reliability: "week",
                    acceleration: "takeoff",
                    settlement: "commons",
                },
                text: "On her fifty-sixth birthday, Maya chooses her next body repair and turns down a memory upgrade. Material problems that shaped her parents’ lives have faded. Her hard choice is how much of herself to change.",
            },
            {
                when: {
                    reliability: "week",
                    acceleration: "takeoff",
                    settlement: "fortress",
                },
                text: "Maya spends Tuesday appealing Luis’s place in a treatment queue while a premium clinic offers the same repair for tomorrow. The frontier bloc can solve old problems. Its leaders decide whose problem moves first.",
            },
            {
                when: {
                    reliability: "week",
                    acceleration: "bounded",
                    settlement: "buildout",
                },
                text: "Maya takes the train to dinner at Luis’s new home, in a neighborhood that was empty desert four years ago. Reliable agents, machine-found materials, cheap power, and robots gave America the means to build. Permission made the boom real.",
            },
            {
                when: {
                    reliability: "week",
                    acceleration: "bounded",
                    settlement: "bottleneck",
                },
                text: "Maya’s agent tours every listing for Luis by breakfast; by dinner, he has lost another bid. Reliable agents transformed work and science. The country kept much of its old physical scarcity.",
            },
            {
                when: {
                    reliability: "close",
                    acceleration: "specialists",
                    settlement: "rejuvenation",
                },
                text: "At fifty-six, Maya hikes Camelback with the recovery time she had at thirty-eight, then tunes her speech implant on the walk home. Science specialists learned to read and repair living systems. Health and enhancement became the great transformation of the age.",
            },
            {
                when: {
                    reliability: "close",
                    acceleration: "specialists",
                    settlement: "clinic",
                },
                text: "Maya leaves her annual checkup with a clean scan and three preventive treatments her parents never had. Machine science produced a crowded cabinet of cures. The body remained too tangled for a full reset.",
            },
            {
                when: {
                    reliability: "close",
                    acceleration: "steady",
                    settlement: "dividend",
                },
                text: "Maya spends Friday helping Luis move into a home he can afford on one income. The technology curve stayed closer to history. More homes, broad ownership, and strong services made an ordinary week feel secure and free.",
            },
            {
                when: {
                    reliability: "close",
                    acceleration: "steady",
                    settlement: "scarcity",
                },
                text: "Luis gets a raise on Monday and a rent increase on Tuesday; by Friday, the future feels just as tight. The quietest path still contains amazing inventions. Their benefits land unevenly.",
            },
        ],
        mechanism: "Every ending combines capability, surprise, proof, construction, and access. The tree changes its later question because a world with superintelligence faces a different hinge than a world with steady machine-assisted science.",
        sourceIds: [
            "stanford-tech",
            "metr-rsi",
            "ideas-harder",
            "alphafold",
            "iea-diffusion",
            "who-hale",
            "census-income",
            "census-housing",
            "fed-wellbeing",
            "safety-report",
        ],
    },
];
export const breakthroughDomains = [
    {
        id: "compute",
        label: "Computation & mathematics",
        historicalPerDecade: 1.8,
        examples: "deep learning, transformers, machine-found algorithms",
    },
    {
        id: "biology",
        label: "Biology & medicine",
        historicalPerDecade: 2.1,
        examples: "genome sequencing, CRISPR, mRNA, protein prediction",
    },
    {
        id: "energy",
        label: "Energy & materials",
        historicalPerDecade: 1.4,
        examples: "new solar materials, batteries, fusion ignition",
    },
    {
        id: "physics",
        label: "Physics",
        historicalPerDecade: 0.8,
        examples: "the Higgs boson, gravitational waves, quantum control",
    },
    {
        id: "society",
        label: "Economics, mind & institutions",
        historicalPerDecade: 1.1,
        examples: "digital money, scaled deliberation, new social insurance",
    },
];
export function matchesPath(condition, path) {
    if (!condition)
        return true;
    return Object.entries(condition).every(([key, value]) => path[key] === value);
}
export function storyTextFor(text, path) {
    if (typeof text === "string")
        return text;
    return text.find((candidate) => matchesPath(candidate.when, path))?.text ?? "";
}
export function probabilityFor(stage, optionId, path) {
    const option = branchForStage(stage, path).options.find((candidate) => candidate.id === optionId);
    return option?.probability ?? 0;
}
export function pathProbability(path) {
    return branchPointsFor(path).reduce((probability, branch) => probability * probabilityFor(branch.id, path[branch.id], path), 1);
}
function estimate(central, spread, unit = "%", floor = 0, ceiling = unit === "%" || unit === "index" ? 100 : Number.POSITIVE_INFINITY) {
    return {
        central: Number(central.toFixed(1)),
        low: Math.max(floor, Number((central - spread).toFixed(1))),
        high: Math.min(ceiling, Number((central + spread).toFixed(1))),
        unit,
    };
}
function outcomeIdentityFor(path) {
    const identity = outcomeIdentities.find((candidate) => matchesPath(candidate.path, path));
    if (!identity)
        throw new Error("Forecast path has no outcome.");
    return identity;
}
function progressAfter(year, start, power = 1) {
    if (year <= start)
        return 0;
    const raw = Math.min(1, (year - start) / (2050 - start));
    return raw ** power;
}
function interpolate(start, targetValue, progress) {
    return start + (targetValue - start) * progress;
}
function accelerationPowers(path) {
    if (path.acceleration === "takeoff") {
        return { research: 2.6, insight: 2.3 };
    }
    if (path.acceleration === "specialists") {
        return { research: 1.45, insight: 1.35 };
    }
    return { research: 1.1, insight: 1.05 };
}
function breakthroughTargetFor(path, profile) {
    const step = 0.25;
    const historicalRate = headlineEstimates.historicalLandmarksPer25Years / 25;
    const powers = accelerationPowers(path);
    let discoveries = 0;
    for (let year = 2026; year < 2050; year += step) {
        const midpoint = year + step / 2;
        const research = interpolate(1.1, profile.researchSpeed.central, progressAfter(midpoint, 2031, powers.research));
        const insight = interpolate(1, profile.insightReach.central, progressAfter(midpoint, 2032, powers.insight));
        discoveries +=
            historicalRate *
                research ** 0.4 *
                insight ** 0.7 *
                step;
    }
    const central = discoveries * profile.breakthroughConversion;
    return target(central, central * profile.breakthroughSpreadRatio);
}
export function snapshotFor(year, path) {
    const baseline = {
        delegatedWork: target(8, 5),
        researchSpeed: target(1.1, 0.2),
        insightReach: target(1, 0.15),
        breakthroughs: target(0, 0),
        healthyYears: target(64.8, 1.2),
        materialStandard: target(1, 0.08),
        housingBurden: target(26, 4),
        physicalCoverage: target(2, 1),
        riskPressure: target(18, 10),
    };
    if (year <= 2026) {
        return {
            delegatedWork: estimate(8, 5),
            researchSpeed: estimate(1.1, 0.2, "×", 1),
            insightReach: estimate(1, 0.15, "×", 0.5),
            breakthroughs: estimate(0, 0, "events"),
            healthyYears: estimate(64.8, 1.2, "years", 0, 160),
            materialStandard: estimate(1, 0.08, "×", 0),
            housingBurden: estimate(26, 4),
            physicalCoverage: estimate(2, 1),
            riskPressure: estimate(18, 10, "index"),
        };
    }
    if (year <= 2028) {
        const earlyProgress = (year - 2026) / 2;
        return {
            delegatedWork: estimate(interpolate(8, 20, earlyProgress), 8),
            researchSpeed: estimate(interpolate(1.1, 1.4, earlyProgress), 0.4, "×", 1),
            insightReach: estimate(interpolate(1, 1.2, earlyProgress), 0.25, "×", 0.5),
            breakthroughs: estimate(interpolate(0, 1, earlyProgress), 1, "events"),
            healthyYears: estimate(interpolate(64.8, 65.3, earlyProgress), 1.4, "years", 0, 160),
            materialStandard: estimate(interpolate(1, 1.08, earlyProgress), 0.12, "×", 0),
            housingBurden: estimate(interpolate(26, 25.5, earlyProgress), 4),
            physicalCoverage: estimate(interpolate(2, 4, earlyProgress), 2),
            riskPressure: estimate(interpolate(18, 24, earlyProgress), 13, "index"),
        };
    }
    if (year === 2031) {
        return {
            delegatedWork: estimate(42, 15),
            researchSpeed: estimate(1.8, 0.7, "×", 1),
            insightReach: estimate(1.3, 0.35, "×", 0.5),
            breakthroughs: estimate(3, 2, "events"),
            healthyYears: estimate(66, 1.8, "years", 0, 160),
            materialStandard: estimate(1.2, 0.2, "×", 0),
            housingBurden: estimate(25, 4),
            physicalCoverage: estimate(8, 4),
            riskPressure: estimate(32, 16, "index"),
        };
    }
    const profile = outcomeIdentityFor(path).profile;
    const fastResearch = path.acceleration === "takeoff";
    const specialistResearch = path.acceleration === "specialists";
    const breakthroughTarget = breakthroughTargetFor(path, profile);
    const delegatedProgress = progressAfter(year, 2028, 1.05);
    const researchProgress = progressAfter(year, 2031, fastResearch ? 2.6 : specialistResearch ? 1.45 : 1.1);
    const insightProgress = progressAfter(year, 2032, fastResearch ? 2.3 : specialistResearch ? 1.35 : 1.05);
    const breakthroughProgress = progressAfter(year, 2026, fastResearch ? 2.05 : specialistResearch ? 1.35 : 1.05);
    const healthProgress = progressAfter(year, 2032, path.settlement === "rejuvenation" ||
        path.settlement === "commons" ||
        path.settlement === "fortress"
        ? 2
        : 1.35);
    const materialProgress = progressAfter(year, 2028, fastResearch ? 1.8 : 1.15);
    const settlementProgress = progressAfter(year, 2038, 1.3);
    const physicalProgress = progressAfter(year, 2031, 1.25);
    const riskProgress = progressAfter(year, 2028, fastResearch ? 1.15 : 0.9);
    function spreadFor(key, progress) {
        return interpolate(baseline[key].spread, profile[key].spread, progress);
    }
    const delegated = interpolate(baseline.delegatedWork.central, profile.delegatedWork.central, delegatedProgress);
    const research = interpolate(baseline.researchSpeed.central, profile.researchSpeed.central, researchProgress);
    const insight = interpolate(baseline.insightReach.central, profile.insightReach.central, insightProgress);
    const breakthroughs = interpolate(0, breakthroughTarget.central, breakthroughProgress);
    const health = interpolate(baseline.healthyYears.central, profile.healthyYears.central, healthProgress);
    const material = interpolate(baseline.materialStandard.central, profile.materialStandard.central, materialProgress);
    const housing = interpolate(baseline.housingBurden.central, profile.housingBurden.central, settlementProgress);
    const physical = interpolate(baseline.physicalCoverage.central, profile.physicalCoverage.central, physicalProgress);
    const risk = interpolate(baseline.riskPressure.central, profile.riskPressure.central, riskProgress);
    return {
        delegatedWork: estimate(delegated, spreadFor("delegatedWork", delegatedProgress)),
        researchSpeed: estimate(research, spreadFor("researchSpeed", researchProgress), "×", 1),
        insightReach: estimate(insight, spreadFor("insightReach", insightProgress), "×", 0.5),
        breakthroughs: estimate(breakthroughs, interpolate(baseline.breakthroughs.spread, breakthroughTarget.spread, breakthroughProgress), "events"),
        healthyYears: estimate(health, spreadFor("healthyYears", healthProgress), "years", 0, 160),
        materialStandard: estimate(material, spreadFor("materialStandard", materialProgress), "×", 0),
        housingBurden: estimate(housing, spreadFor("housingBurden", settlementProgress)),
        physicalCoverage: estimate(physical, spreadFor("physicalCoverage", physicalProgress)),
        riskPressure: estimate(risk, spreadFor("riskPressure", riskProgress), "index"),
    };
}
export function breakthroughForecastFor(path) {
    const identity = outcomeIdentityFor(path);
    const total = breakthroughTargetFor(path, identity.profile).central;
    return breakthroughDomains.map((domain, index) => ({
        ...domain,
        deployedBy2050: Math.round(total * identity.profile.breakthroughMix[index]),
    }));
}
export function outcomeFor(path) {
    const identity = outcomeIdentityFor(path);
    const snapshot = snapshotFor(2050, path);
    const capabilityMedian = path.acceleration === "takeoff"
        ? 2036
        : path.reliability === "week"
            ? 2033
            : path.acceleration === "specialists"
                ? 2039
                : 2043;
    return {
        name: identity.name,
        subtitle: identity.subtitle,
        storySummary: identity.storySummary,
        probability: pathProbability(path),
        capabilityMedian,
        snapshot,
    };
}
export function allPaths() {
    const paths = [];
    for (const reliability of ["week", "close"]) {
        for (const accelerationOption of accelerationBranches[reliability].options) {
            const acceleration = accelerationOption.id;
            for (const settlementOption of settlementBranches[acceleration].options) {
                paths.push({
                    reliability,
                    acceleration,
                    settlement: settlementOption.id,
                });
            }
        }
    }
    return paths;
}
export function validateForecastModel() {
    const errors = [];
    const sourceIds = new Set(sources.map((source) => source.id));
    const nodeIds = new Set();
    const paths = allPaths();
    if (paths.length !== 8) {
        errors.push(`The conditional tree has ${paths.length} leaves, not 8.`);
    }
    for (const path of paths) {
        const branches = branchPointsFor(path);
        if (branches.length > 3) {
            errors.push("A path has more than three branch points.");
        }
        for (const branch of branches) {
            if (branch.options.length !== 2) {
                errors.push(`Branch ${branch.key} does not have exactly two options.`);
            }
            const probability = branch.options.reduce((total, option) => total + option.probability, 0);
            if (Math.abs(probability - 1) > 0.000001) {
                errors.push(`Branch ${branch.key} probabilities sum to ${probability}.`);
            }
        }
        const identity = outcomeIdentityFor(path);
        const breakthroughTarget = breakthroughTargetFor(path, identity.profile);
        if (!Number.isFinite(breakthroughTarget.central)) {
            errors.push("A forecast path has an invalid breakthrough target.");
        }
        const mixTotal = identity.profile.breakthroughMix.reduce((total, share) => total + share, 0);
        if (Math.abs(mixTotal - 1) > 0.000001) {
            errors.push(`A breakthrough mix sums to ${mixTotal}, not 1.`);
        }
    }
    let lastYear = 0;
    for (const node of storyNodes) {
        if (nodeIds.has(node.id))
            errors.push(`Duplicate node id: ${node.id}.`);
        nodeIds.add(node.id);
        if (node.year < lastYear)
            errors.push(`Non-monotonic year at ${node.id}.`);
        lastYear = node.year;
        for (const sourceId of node.sourceIds) {
            if (!sourceIds.has(sourceId)) {
                errors.push(`Unknown source ${sourceId} on node ${node.id}.`);
            }
        }
        for (const path of paths) {
            if (!storyTextFor(node.title, path)) {
                errors.push(`Node ${node.id} has no title for a forecast path.`);
            }
            if (!storyTextFor(node.summary, path)) {
                errors.push(`Node ${node.id} has no summary for a forecast path.`);
            }
            if (!storyTextFor(node.mechanism, path)) {
                errors.push(`Node ${node.id} has no mechanism for a forecast path.`);
            }
            if (!node.copy.some((paragraph) => matchesPath(paragraph.when, path))) {
                errors.push(`Node ${node.id} has no copy for a forecast path.`);
            }
            const renderedNarrative = [
                storyTextFor(node.summary, path),
                ...node.copy
                    .filter((paragraph) => matchesPath(paragraph.when, path))
                    .map((paragraph) => paragraph.text),
            ].join(" ");
            if (!/\b(?:Maya|Luis)\b/.test(renderedNarrative)) {
                errors.push(`Node ${node.id} has no Maya or Luis moment.`);
            }
        }
    }
    const totalProbability = paths.reduce((total, path) => total + pathProbability(path), 0);
    if (Math.abs(totalProbability - 1) > 0.000001) {
        errors.push(`Leaf probabilities sum to ${totalProbability}, not 1.`);
    }
    if (errors.length) {
        throw new Error(`Invalid forecast model:\n${errors.join("\n")}`);
    }
}
