import Document, { Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render(){
        return(
            <html lang="en">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="description" contante="My SEO with next.js" />
                    <meta name="keywords" contante="next,nextjs, react, jafi, ssr" />
                    <meta name="author" contante="jafi" />
                    <link rel="stylesheet" href="styles.css" />
                    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"/>
                </head>
                <bod>
                    <Main />
                    <NextScript />
                </bod>
            </html>
        )
    }
}

export default MyDocument;