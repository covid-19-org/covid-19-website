import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Heading, Box } from "@chakra-ui/core"
import { Link } from "gatsby"

const headerStyling = {
  color: "white",
  fontSize: ["36px", "48px", "84px"],
  maxWidth: "847px",
  fontWeight: "bold",
  marginTop: "40px"
}

const buttonStyling = {
  backgroundColor: "#FFEE56",
  color: "black",
  margin: "40px 0px",
}

const IndexPage = () => (
  <Layout mainStyle={{backgroundColor: "#B56AFF"}}>
    <SEO title="Home" />
    <Box
      maxWidth={1300}
      paddingY={8}
    >
      <Heading {...headerStyling}>Need help in Quarantine?</Heading>
      <Button {...buttonStyling}>SUPPORT RESOURCES</Button>
      <Heading {...headerStyling}>
        Be part of the #code4covid Tech Response team
      </Heading>
      <Link to="/tech-landing/">
        <Button style={buttonStyling}>VOLUNTEER</Button>
      </Link>
    </Box>
  </Layout>
)

export default IndexPage
