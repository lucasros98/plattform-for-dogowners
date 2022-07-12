import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="sv" className="scroll-smooth">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                   
                    <style data-href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap">
                    </style>

                    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
                </Head>
                <body className="bg-white text-black antialiased ">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
