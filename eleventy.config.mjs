export default function (eleventyConfig) {
    eleventyConfig.setNunjucksEnvironmentOptions({
        lstripBlocks: true,
        trimBlocks: true,
    })

    eleventyConfig.addPassthroughCopy({ 'site/assets': '.' })
    eleventyConfig.ignores.add('site/README.md')

    eleventyConfig.addCollection('notes', (collectionApi) => {
        return collectionApi.getFilteredByTag('notes').sort((left, right) => right.date - left.date)
    })

    eleventyConfig.addCollection('activeProjects', (collectionApi) => {
        return collectionApi
            .getFilteredByTag('project')
            .filter((item) => item.data.status === 'active')
            .sort((left, right) => left.data.order - right.data.order)
    })

    eleventyConfig.addCollection('archivedProjects', (collectionApi) => {
        return collectionApi
            .getFilteredByTag('project')
            .filter((item) => item.data.status === 'archived')
            .sort((left, right) => left.data.order - right.data.order)
    })

    eleventyConfig.addFilter('displayDate', (value) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
        }).format(new Date(value))
    })

    return {
        dir: {
            input: 'site',
            includes: '_includes',
            data: '_data',
            output: 'docs',
        },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        templateFormats: ['md', 'njk'],
    }
}
