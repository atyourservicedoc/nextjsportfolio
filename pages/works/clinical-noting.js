import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Seatfair">
            <Container>
                <Title>
                    Clinical Noting <Badge>2020</Badge>
                </Title>
                <P>
                    Management tooling for physicians to manage, enter, and view patient, and appointment data.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Chrome/Firefox/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack
                        </Meta>
                        <span>Angular, Material Design, Typescript, Redux.js, Jest</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/clinicalnoting.jpeg" alt="Clinical Noting"/>
            </Container>
        </Layout>
    )
}

export default Work;