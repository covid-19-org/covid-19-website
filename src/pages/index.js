import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Heading, Text } from "@chakra-ui/core"
import { Link } from "gatsby"
import Section from "../components/section"

const headerStyling = {
  color: "white",
  fontSize: ["36px", "48px", "64px", "64px", "84px"],
  maxWidth: "847px",
  fontWeight: "bold",
  marginTop: [5,10],
}

const buttonStyling = {
  backgroundColor: "#FFEE56",
  margin: "40px 0px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      backgroundColor={"#B56AFF"}
      paddingY={[1,8]}
    >
      <Heading {...headerStyling}>Need help in Quarantine?</Heading>
      <Link to="/support-resources/">
        <Button {...buttonStyling}>SUPPORT RESOURCES</Button>
      </Link>
      <Heading {...headerStyling}>
        Be part of the #code4covid Tech Response team
      </Heading>
      <Link to="/tech-landing/">
        <Button style={buttonStyling}>VOLUNTEER</Button>
      </Link>
    </Section>

    <Section
      fontSize={[16, 24]}
      maxWidth={800}
      paddingY={8}
    >
      <Heading paddingBottom={6}>Who we are</Heading>
      <Text>
        We are a team of helpers to help...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae enim mi. Etiam eget mi mi. In rhoncus nibh dolor, vel pulvinar ipsum pharetra eget. Aenean diam dolor, ullamcorper vitae dolor sit amet, convallis faucibus est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod tortor sed suscipit aliquam. Curabitur sollicitudin lorem non nisl bibendum, nec iaculis metus bibendum.
      </Text>
    </Section>
  </Layout>
)

export default IndexPage
