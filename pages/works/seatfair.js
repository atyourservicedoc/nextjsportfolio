import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
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
                <P>
                    A auction house style ticketing platform for high-demand events.
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