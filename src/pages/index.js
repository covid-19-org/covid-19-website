import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Heading, Text, List, ListItem, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import Section from "../components/section"

const headerStyling = {
  color: "white",
  fontSize: ["32px", "48px", "64px", "64px", "84px"],
  maxWidth: "1400px",
  fontWeight: "bold",
  marginTop: [5,10],
}

const buttonStyling = {
  backgroundColor: "yellow",
  margin: "40px 0px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      backgroundColor={"purple"}
      paddingY={[1,8]}
    >
      <Heading {...headerStyling}>Need tech resources <br/> for a project?</Heading>
      <Link href="https://covidtechsupport.com/about/" isExternal>
        <Button {...buttonStyling}>GET TECH SUPPORT</Button>
      </Link>
      <Heading {...headerStyling}>
        Tech Volunteer? Join the <i>#code4covid</i> Community
      </Heading>
      <GatsbyLink to="/tech-volunteers/">
        <Button style={buttonStyling}>TECH VOLUNTEERS</Button>
      </GatsbyLink>
    </Section>

    <Section
      fontSize={[16, 24]}
      paddingY={8}
    >
      <Heading paddingBottom={6}>Who we are</Heading>
      <Text>
        Formed as a Slack group on March 16th by a couple of ex-colleagues, the <strong>code4covid</strong> community now counts over 700 tech volunteers: and with other groups joining in, it keeps growing!
      </Text>
      <br />
      <Text>
        The team's mission is to find technology solutions to help people during the COVID-19 crisis: we believe that technology can minimise the disruption caused by the pandemic and ultimately save lives.
      </Text>
      <br />
      <Text>
        To ensure energy gets directed to the right places and efforts are not duplicated, we are also collaborating with initiatives formed by other inspiring groups as part of the COVID-19 Tech Response.
      </Text>
      <br />
      <Text>
        There are already lots of ongoing efforts to use tech to help in this crisis. These include:
      </Text>
      <br />
      <List styleType="disc">
        <ListItem>
          <Link textDecoration="underline" fontWeight={500} _hover={{ fontWeight: 700 }} href="https://coronavirustechhandbook.com" isExternal>coronavirustechhandbook.com</Link> - COVID-19 Tech Response's library of resources
        </ListItem>
        <ListItem>
          <Link textDecoration="underline" fontWeight={500} _hover={{ fontWeight: 700 }} href="https://covidmutualaid.org" isExternal>covidmutualaid.org</Link> - A direct line into local community efforts
        </ListItem>
        <ListItem>
          <Link textDecoration="underline" fontWeight={500} _hover={{ fontWeight: 700 }} href="https://techforuk.com" isExternal>https://techforuk.com</Link> - Slack group for collecting volunteers and open discussion
        </ListItem>
        <ListItem>
          <Link textDecoration="underline" fontWeight={500} _hover={{ fontWeight: 700 }} href="https://covid19-response.com" isExternal>covid19-response.com</Link> - Moderated scientific 'request for ideas'
        </ListItem>
        <ListItem>
          <Link textDecoration="underline" fontWeight={500} _hover={{ fontWeight: 700 }} href="https://helpwithcovid.com" isExternal>helpwithcovid.com</Link> - International volunteer sign ups and ideas board
        </ListItem>
      </List>
    </Section>
  </Layout>
)

export default IndexPage
