import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Build A Bet">
            <Container>
                <Title>
                    Build A Bet <Badge>2018</Badge>
                </Title>
                <P>
                    An internal tool for clients to create multi-line betting options, with appropriate odds, to be displayed as options on their site.
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