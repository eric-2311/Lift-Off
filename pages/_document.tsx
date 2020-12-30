import Document, { Head, Main, Html, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <title>SpaceX Log</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}