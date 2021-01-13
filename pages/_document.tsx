import Document, { Head, Main, Html, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>
                    <meta property="og:title" content="SpaceX Mission Log"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lift-off.vercel.app/"/>
                    <meta property="og:image" content="https://lift-off.vercel.app/" />
                    <meta property="og:description" content="Browse previous SpaceX launches with this app built using Contentful and Next.js. View launch videos and data from each launch via Contentful CMS!"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}