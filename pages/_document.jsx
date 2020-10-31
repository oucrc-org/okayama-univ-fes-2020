import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                        `,
                    }}
                />
                <meta property="og:image" content="https://okayama-univ-fes-git-master.oucrc.vercel.app/public/image/committee.jpg"/>
                <meta property="og:site_name" content="岡山大学大学祭2020" />
                <meta property="og:description" content="岡山大学大学祭のホームページです" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }

}