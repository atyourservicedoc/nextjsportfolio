import { Container, Badge, Link, List, ListItem, Heading } from "@chakra-ui/react";
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
                <Heading as="h6" variant="section-title">
                    Context
                </Heading>
                <P>
                   My employer ran a football focused gamified gambling app that was being sunset. A wallet application needed to be developed
                   to allow users to withdraw their funds.
                </P>

                <Heading as="h6" variant="section-title">
                    Wallet
                </Heading>
                <P>
                    I developed the UI components, and in-memory data storage for the wallet application. I worked closely
                    with our graphic designer to work through UX flows and iron out pain points before development began.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS</span>
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