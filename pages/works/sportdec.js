import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Sportdec">
            <Container>
                <Title>
                    Sportdec <Badge>2019</Badge>
                </Title>
                <P>
                    A user facing football gambling app.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack
                        </Meta>
                        <span>React Native, Bootstrap</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/sportdec.jpg" alt="Sportdec"/>
                <WorkImage src="/images/works/sportdec.jpeg" alt="Sportdec"/>
            </Container>
        </Layout>
    )
}

export default Work;