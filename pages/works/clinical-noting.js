import { Container, Badge, Link, List, ListItem, Heading } from "@chakra-ui/react";
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
                <Heading as="h6" variant="section-title">
                    Context
                </Heading>
                <P>
                    My employer wanted to develop a greenfield application to manage patient data and appointments while utilisation a legacy database from an
                    eObs app they offered.
                </P>
                <Heading as="h6" variant="section-title">
                    Web Service
                </Heading>
                <P>
                    I was a core developer of a team of 4 over the course of the projects development from initial development to well into launch and active on-site use.
                    I was responsible for developing a number of full features on a solo basis, adding functionality to view and manage surgical data, symptomology, and appointment data.
                    As new less senior developers joined the team I was responsible for pairing with them on features and ensuring they caught up to speed, didn't feel overwhelmed, and had the
                    appropriate support system in place for assistance and confidence building.  
                </P>
                <Heading as="h6" variant="section-title">
                    Hand-Written Note
                </Heading>
                <P>
                    A tentpole feature I spearheaded was integrating a 3rd party peripheral bluetooth-only pen-and-paper-integrated drawing tablet
                    into the app, and developing the in-app application that would use it. I worked with a systems developer who developed the Windows Service to connect to
                    the device, and the messaging bridge to the front end. I developed the canvas and point translation system to transpose pen movements into draws on the canvas. I worked with backend to design a
                    data model for storing the drawing data in a way that was space efficient. I designed and developed a micro-rendering engine to allow updates to the draw to be incredibly performant. In addition
                    I developed the connection UX workflow extensibly, and documented the installation and connection process for our customers. 
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