import { Container, Badge, Link, List, ListItem, Heading } from "@chakra-ui/react";
import {Title, WorkImage, Meta} from '../../components/work';
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Seatfair">
            <Container>
                <Title>
                    Seatfair <Badge>2017</Badge>
                </Title>
                <Heading as="h6" variant="section-title">
                    Context
                </Heading>
                <P>
                    My team was composed of 2 developers, a QA tester, and a graphic designer. 
                    We worked to develop a greenfield auction house ticketing platform.
                    The target market was high-demand events. By utilising auction house style sales mechanics
                    it would allow the event organiser to take home the revenue from excess demand that normally would
                    be taken by scalpers, in a way that would be net-neutral for PR due to the sales price being decided by
                    individual customers.
                </P>
                <P>
                    The project was divided into two seperate web services. The customer facing portal, and a client facing admin dashboard.
                </P>
                <Heading as="h6" variant="section-title">
                    Customer Portal
                </Heading>
                <P>
                    I developed an interative canvas based svg map where users could select the section, row, and/or individual seats that users
                    desired to auction towards winning. Users could also enable fallback settings if they were outbid to find them cheaper seating 
                    within their budget.
                </P>
                <P>
                    I developed the UX flow for bidding, and setting up payment information. I worked on integrating Stripe as our payment provider. Users set a maximum bid for their selection. User&apos;s bids start at the current price plus the minimum increase. When outbid, users would
                    be notified via email and push notifications that their bid had increased. 
                </P>
                <Heading as="h6" variant="section-title">
                    Admin Dashboard
                </Heading>
                <P>
                    I developed a number of data-driven graphs and charts, using chartist.js, to display information
                    about the data on ticket sales, and bid information on client&apos;s events. I also developed interactive displays for the
                    allocating of seats as available for sale based on pre-existing data from my employer&apos;s legacy offerings.
                </P>
                <Heading as="h6" variant="section-title">
                    Backend
                </Heading>
                <P>
                    I co-developed the API driving both the customer and client websites. In addition I would work on schema updates, writing database queries, and running migrations after schema changes.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Chrome/Firefox/InternetExplorer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack
                        </Meta>
                        <span>Angular, Bootstrap, ASP.NET, C#, MySQL</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/seatfair_user.png" alt="Seatfair User Site"/>
                <WorkImage src="/images/works/seatfair_dashboard.png" alt="Seatfair Admin Panel"/>
            </Container>
        </Layout>
    )
}

export default Work;