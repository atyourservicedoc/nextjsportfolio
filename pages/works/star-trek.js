import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Seatfair">
            <Container>
                <Title>
                    Star Trek Fleet Command <Badge>2019</Badge>
                </Title>
                <P>
                    Internal Tooling for Game Designers to update and and add content to different instances of Star Trek: Fleet Command
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