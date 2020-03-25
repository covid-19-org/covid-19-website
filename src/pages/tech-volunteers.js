import React from "react"
import { Heading, Button, Text, List, ListItem } from "@chakra-ui/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const headerStyling = {
  color: "white",
  fontSize: ["32px", "48px", "64px", "64px", "84px"],
  maxWidth: "1400px",
  fontWeight: "bold",
  marginTop: [5,10],
  paddingBottom: 20,
}

const buttonStyling = {
  backgroundColor: "#FFEE56",
  margin: "80px 0px 40px",
}

const textStyling = {
  fontSize: "35px",
  paddingY: 5,
  color: "white",
  fontWeight: "bold",
}

const TechVolunteers = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Section
        backgroundColor={"#B56AFF"}
        paddingY={[1,8]}
      >
        <Heading {...headerStyling}>Hello and welcome,<br/> fellow Technologists!</Heading>
        <Text {...textStyling}>
          The number of people who are volunteering for this effort is fantastic, and we want to ensure this energy gets directed to the right place and optimised.
        </Text>
        <Text {...textStyling}>
          So tell us what skills you have and your realistic availability, and we'll add you to the Slack group to get you started!
        </Text>
      </Section>

      <Section
        fontSize={[16, 22]}
        maxWidth={1150}
        paddingY={8}
        fontWeight={500}
      >
        <Text paddingY={5}>
          So you’re a:
        </Text>
        <List>
          <ListItem>• Developer</ListItem>
          <ListItem>• Data Scientist</ListItem>
          <ListItem>• Designer</ListItem>
          <ListItem>• Product / Project Manager</ListItem>
          <ListItem>• Content Creator, Writer</ListItem>
          <ListItem>• Marketing / PR / Marketplace Specialist</ListItem>
        </List>
        <Text>etc!</Text>
        <Text paddingY={5}>...and you want to help in the Covid19 crisis?</Text>
        <Text>This is what you can find here:</Text>
        <List>
          <ListItem>• Offer your skills to existing projects by code4covid group</ListItem>
          <ListItem>• Ask for tech resources for your project to code4covid group</ListItem>
          <ListItem>• Check the Coronavirus Tech Handbook by TechForUK group</ListItem>
          <ListItem>• Explore List Of Existing Tech Communities</ListItem>
        </List>

        <Link to="/get-involved/">
          <Button {...buttonStyling}>CLICK TO START!</Button>
        </Link>
      </Section>
    </Layout>
  )
};

export default TechVolunteers