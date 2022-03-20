import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
                    />
                    <meta name='description' content='ToDo Next App' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
                    <meta name='application-name' content='ToDo App' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='theme-color' content='#009688' />
                    <link rel='manifest' href='/manifest.json' />
                    <meta name='msapplication-TileColor' content='#009688' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-title' content='ToDo App' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='#009688' />
                    <link rel='apple-touch-icon' href='/favicon.ico' sizes='16x16' />
                    <link rel='apple-touch-icon' href='/favicon.ico' sizes='24x24' />
                    <link rel='apple-touch-icon' href='/favicon.ico' sizes='32x32' />
                    <link rel='apple-touch-icon' href='/favicon.ico' sizes='64x64' />
                    <link rel='apple-touch-icon' href='/icon-192x192.png' sizes='192x192' />
                    <link rel='apple-touch-icon' href='/icon-256x256.png' sizes='256x256' />
                    <link rel='apple-touch-icon' href='/icon-384x384.png' sizes='384x384' />
                    <link rel='apple-touch-icon' href='/icon-512x512.png' sizes='512x512' />
                    <meta name='msapplication-TileImage' content='/icon-192x192.png' />
                    <link rel='icon' type='image/ico' sizes='32x32' href='/favicon.ico' />
                    <link rel='icon' type='image/ico' sizes='16x16' href='/icons/favicon.ico' />
                    <link rel='mask-icon' href='/favicon.ico' color='#009688' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='ToDo App' />
                    <meta property='og:description' content='ToDo Next App' />
                    <meta property='og:site_name' content='ToDo App' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
