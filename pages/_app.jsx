import '@/styles/index.css'
import { DefaultSeo, SocialProfileJsonLd, WebPageJsonLd } from 'next-seo'
import seo from '../seo.config'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...seo.defaultSeo} />
            <SocialProfileJsonLd {...seo.jsonLd.socialProfileJsonLd} />
            <WebPageJsonLd {...seo.jsonLd.webpageJsonLd} />
            <Component {...pageProps} />
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}/>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `}
            </Script>
        </>
    )
}
