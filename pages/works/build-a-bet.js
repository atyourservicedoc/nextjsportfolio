import { Container, Badge, Link, List, ListItem, Heading } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Build A Bet">
            <Container maxW={'container.lg'}>
                <Title>
                    Build A Bet <Badge>2018</Badge>
                </Title>
                <Heading as="h6" variant="section-title">
                    Context
                </Heading>
                <P>
                    My employer offered real-time multi-line betting odds, using a propriatary machine learning driven algorithm, to clients such as Betfair and PaddyPower.
                    Clients would email my employers office with multi-line bets to create, or templates to create, made available by an AI of ours to offer 
                    &quot;Build-a-bet&quot; services to their customers. This was not feasible at scale and was a drain on developer time. I was tasked with developing a Web Service
                    that would allow both our clients employees, and our offices employees design build-a-bet offerings.
                </P>
                <Heading as="h6" variant="section-title">Web Service</Heading>
                <P>
                    Using existing APIs, I developed a Web Service allowing users to create sport specific multi-line-bets, giving the combination a name,
                    and setting its availability for individual matches, matches in a league, or for the sport in it&apos;s entirety.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Chrome/Firefox</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack
                        </Meta>
                        <span>React, Bootstrap</span>
                    </ListItem>
                </List>
                    <WorkImage src="/images/works/banach.png" alt="Build A Bet"/>
                </Container>
        </Layout>
    )
}

export default Work;