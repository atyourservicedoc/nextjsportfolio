import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { AnimatePresence } from "framer-motion";
import { TrackingProvider } from "../contexts/trackers";

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <TrackingProvider>
                        <Component {...pageProps} key={router.route} />
                    </TrackingProvider>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website