import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "@chakra-ui/core"

const headerStyling = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "84px",
  lineHeight: "95px",
  color: "#fff",
  maxWidth: "847px",
}

const buttonStyling = {
  backgroundColor: "#FFEE56",
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
      <h1 style={headerStyling}>Need help in Quarantine?</h1>
      <Button style={buttonStyling}>SUPPORT RESOURCES</Button>
      <h1 style={headerStyling}>
        Be part of the #code4covid Tech Response team
      </h1>
      <Button style={buttonStyling}>VOLUNTEER</Button>
    </div>
  </Layout>
)

export default IndexPage
