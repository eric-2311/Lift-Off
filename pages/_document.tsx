import Document, { Head, Main, Html, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>
                    <meta property="og:title" content="SpaceX Mission Log"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://localhost:3000/"/>
                    <meta property="og:image" content="%PUBLIC_URL%/meta-pic.png" />
                    <meta property="og:description" content="Browse previous SpaceX launches with this app built using Contentful and Next.js"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}