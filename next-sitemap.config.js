// import('next-sitemap').IConfig

module.exports = {
    siteUrl: 'https://simanto-roy.vercel.app/',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    alternateRefs: [
        {
            href: 'https://sroy-simanto.github.io/',
            hreflang: 'es',
        },
    ],
    images: [{ loc: 'https://simanto-roy.vercel.app/assets/simanto-roy.jpg' }],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'test-bot',
                allow: ['/data/about.js', '/data/home.js', '/data/projects.js', '/data/services.js', '/data/testimonials.js', '/data/common/socialLinks.js', '/seo.config.js'],
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/components', '/styles'],
            },
        ]
    },
}