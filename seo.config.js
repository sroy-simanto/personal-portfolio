const seo = {
    defaultSeo: {
        title: 'Simanto Roy - Fullstack Developer',
        description:
            'Hey, I am a professional fullstack web developer with a passion for creating beautiful and functional websites. I have been working with web technologies for over last four years.',
        canonical: 'https://simanto-roy.vercel.app',
        themeColor: '#3b82f6',
        openGraph: {
            title: 'Simanto Roy - Fullstack Developer',
            description:
                'Hey, I am a professional fullstack web developer with a passion for creating beautiful and functional websites. I have been working with web technologies for over last four years.',
            url: 'https://simanto-roy.vercel.app',
            type: 'profile',
            profile: {
                firstName: 'Simanto',
                lastName: 'Roy',
                username: 'simanto-sroy',
                gender: 'male'
            },
            images: [
                {
                    url: 'https://simanto-roy.vercel.app/assets/simanto-roy.jpg',
                    width: 360,
                    height: 360,
                    alt: 'Simanto Roy'
                }
            ]
        }
    },
    jsonLd: {
        socialProfileJsonLd: {
            type: 'Person',
            name: 'Simanto Roy',
            url: 'https://simanto-roy.vercel.app',
            sameAs: [
                'https://www.facebook.com/roy.simanto.sroy//',
                'https://www.instagram.com/sroy_simanto/',
                'https://twitter.com/simanto_sroy',
                'https://linkedin.com/in/simanto-sroy'
            ]
        },
        webpageJsonLd: {
            description: 'What does the fox say?',
            id: 'https://simanto-roy.vercel.app/#home',
            lastReviewed: new Date().toISOString(),
            reviewedBy: {
                type: 'Person',
                name: 'Simanto Roy'
            }
        }
    }
}

export default seo
