import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/proxima-nova-2?styles=44819,44817,44821,44813,44815" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument