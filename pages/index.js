import { Button, Icon, Container, Box, Heading, Image, useColorModeValue, List, ListItem, Link} from "@chakra-ui/react";
import NextLink from 'next/link';
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import {
    IoLogoGithub, IoLogoTwitter
} from 'react-icons/io5';

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2"><i>"Jack of all trades is a master of none, but oftentimes better than a master of one"</i></Heading>
                        <p>Diane Kaufman</p>
                        <p>Web 2 & Web3 developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderStyle="solid" borderWidth={2} maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profiler.png" alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Diane is a freelance and fullstack developer with a passion for building tools to let clients and users build their best life.
                        There's no skill she's unwilling to learn to get the job done. She's driven with curiosity to find out how things work, and how to make them work better.
                        When not online, she plays piano, paints, and runs a D&D campaign. Currently, she is looking for new opportunities. 
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            1995
                        </BioYear>
                        Born at the ripe old age of 0.IE
1

                        Gratuated from W.I.T with a B.Sc(Hons) in Entertainment Systems, with a specialisation in game development.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Worked at Tickets.ie.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Worked at Banach Technology.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Worked with clients such as Sportdec & Digit Game Studios.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 to Present</BioYear>
                        Working at IMS Maxims.
                    </BioSection>
                </Section>
                    <Heading as="h3" variant="section-title">
                        I 💜
                    </Heading>
                    <Paragraph>
                        Painting, Music, Film, Playing Piano, Board Games, Card Games, running my Plex Server. 
                    </Paragraph>
                    <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/yourservicedoc" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@yourservicedoc</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/LayerWired" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>@LayerWired</Button>
                            </Link>
                        </ListItem>
                    </List>
                    <Box align="center" my={4}>
                        <a download href="/files/Diane_Kaufman_Resume.pdf">
                            <Button rightIcon={<ChevronDownIcon/>} colorScheme="teal">
                                CV/Resume
                            </Button>
                        </a>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;