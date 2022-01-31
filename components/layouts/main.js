import Head from 'next/head';
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.png"/>
                <meta name="viewport" content="width=device-width, intial-scale=1"/>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="diane, kaufman, developer, freelance, web, front-end, web3, eth, solidity" />
                <meta name="author" content="Diane Kaufman" />
                <meta name="description" content="Diane Kaufman is a freelance Web Developer working with Angular, React, and Web3"></meta>
                <title>Diane Kaufman - Homepage</title>
            </Head>

            <Navbar path={router.asPath}></Navbar>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main