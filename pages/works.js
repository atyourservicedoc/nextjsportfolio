import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";

import seatfair from "../public/images/works/seatfair_user.png";
import build_a_bet from "../public/images/works/banach.png";
import sportdec from "../public/images/works/sportdec.jpg";
import star_trek from "../public/images/works/star_trek.png";
import clinical_noting from "../public/images/works/clinicalnoting.jpeg";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="seatfair" title="Seatfair" thumbnail={seatfair}>
                            User facing auction-house style ticketing platform.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="build-a-bet" title="Build A Bet" thumbnail={build_a_bet}>
                            Internal tooling Web Service to build multi-line betslips for Paddy Power and Betfair
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="sportdec" title="Sportdec" thumbnail={sportdec}>
                            Customer facing React Native football gambling app.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="star-trek" title="Star Trek Fleet Command" thumbnail={star_trek}>
                            Internal tooling to add and update game content.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="clinical-noting" title="Clinical Noting" thumbnail={clinical_noting}>
                            Tooling for Doctors and Nurses to manage patients and appointments.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;