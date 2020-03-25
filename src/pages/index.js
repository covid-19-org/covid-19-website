import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Heading } from "@chakra-ui/core"
import { Link } from "gatsby"

const headerStyling = {
  color: "white",
  fontSize: ["36px", "84px"],
  maxWidth: "847px",
}

const buttonStyling = {
  backgroundColor: "#FFEE56",
  margin: "40px 0px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <Heading {...headerStyling}>Need help in Quarantine?</Heading>
      <Button {...buttonStyling}>SUPPORT RESOURCES</Button>
      <Heading {...headerStyling}>
        Be part of the #code4covid Tech Response team
      </Heading>
      <Link to="/tech-landing/">
        <Button style={buttonStyling}>VOLUNTEER</Button>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
