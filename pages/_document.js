import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript} from 'next/document';
import theme from '../lib/theme';
import ReactGA from 'react-ga';
import 'dotenv/config';

export default class Document extends NextDocument {

    componentDidMount() {
        ReactGA.initialize(`${process.env.GOOGLE_ANALYTICS}`);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render () {
        return(
            <Html lang="en">
                <Head>
                    
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode }/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}