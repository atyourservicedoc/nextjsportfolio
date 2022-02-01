import { Container, Badge, Link, List, ListItem, Heading } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Seatfair">
            <Container maxW={'container.lg'}>
                <Title>
                    Star Trek Fleet Command <Badge>2019</Badge>
                </Title>
                <Heading as="h6" variant="section-title">
                    Context
                </Heading>
                <P>
                    Game designers required a tool that would allow them to add new races, quests, systems, loot boxes etc. to various staging, and live game instances without dev assistance. I was brought on to further develop this internal web service for the game designers.
                </P>
                <Heading as="h6" variant="section-title">
                    Game Content Tool
                </Heading>
                <P>
                    I worked on improvements to the UX of bulk uploading of CSV data for game content, and python scripting for the sanitisation of that data.
                    I improved the UX around selecting player metrics to determine loot box reward table contents and rarities. I identitied the pain point of identifying
                    and switching between different environments in this tool. I devloped an in tool indicator for which environment was being edited, and a UX flow for swapping environments. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Chrome</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack
                        </Meta>
                        <span>AngularJS, Bootstrap, Python</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/star_trek.png" alt="Star Trek Fleet Command Banner"/>
                <WorkImage src="/images/works/star_trek_1.png" alt="Star Trek Fleet Command Game Screenshot"/>
            </Container>
        </Layout>
    )
}

export default Work;