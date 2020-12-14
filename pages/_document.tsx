import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document { 
    render() {
        return(
        <Html>
            <Head>
                <meta property="custom" content ="test">
                </meta>
            </Head>
                <body>
                    <Main></Main>
                </body>
        </Html>
        )
    }
}