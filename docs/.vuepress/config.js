module.exports = {
    base: '/blog/',
    title: 'Zero的后端笔记',
    description: 'Slow heat',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5']
    },
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '后端博客',
                link: '/back/'
            }
        ],
        sidebar: {
            '/back/': [
                
            ]
        },
        lastUpdated: 'Last Updated',
        repo: 'rungos/blog',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page'
    }
}