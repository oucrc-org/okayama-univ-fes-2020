import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <title>岡山大学大学祭</title>
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
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }

}