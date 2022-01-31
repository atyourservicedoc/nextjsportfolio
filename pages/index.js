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

import { useTracking } from "../contexts/trackers";

const Page = () => {
    
    const { logEvent } = useTracking()

    return (
        <Layout>
            <Container>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2"><i>&quot;Jack of all trades is a master of none, but oftentimes better than a master of one&quot;</i></Heading>
                    </Box>
                    <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderStyle="solid" borderWidth={2} width={94} height={100} layout="fill" display="inline-block" borderRadius="full" src="/images/profiler.png" alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Diane is a freelance Web developer with a passion for building tools to let clients and users build their best life.
                        There&apos;s no skill she&apos;s unwilling to learn to get the job done. She&apos;s driven with curiosity to find out how things work, and how to make them work better.
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
                        Born at the ripe old age of 0.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2017
                        </BioYear>
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
                        Worked at Sportdec & Digit Game Studios.
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
                            <Link
                                to="https://github.com/atyourservicedoc"
                                target="_blank"
                            >
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>} onClick={() => logEvent({category: 'Outbound', action:'Opened Twitter'})}>atyourservicedoc</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="https://twitter.com/LayerWired"
                                target="_blank"
                            >
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>} 
                                onClick={() => logEvent({category: 'Outbound', action:'Opened Github'})}>atyourservicedoc</Button>
                            </Link>
                        </ListItem>
                    </List>
                    <Box align="center" my={4}>
                        <a download href="/files/Diane_Kaufman_Resume.pdf">
                            <Button rightIcon={<ChevronDownIcon/>} colorScheme="teal" onClick={() => logEvent({category: 'Download', action:'Downloaded Resume'})}>
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