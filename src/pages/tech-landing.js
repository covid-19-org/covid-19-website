import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const headerStyling = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "84px",
  lineHeight: "95px",
  color: "#fff",
  maxWidth: "847px",
  textAlign: "center",
  margin: "0 auto",
  marginBottom: "2rem",
}

const TechLanding = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={headerStyling}>Get involved!</h1>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        src="https://airtable.com/embed/shruuF50gMQCJFkW0?backgroundColor=blue"
        className="airtable-embed airtable-dynamic-height"
        frameBorder="0"
        onMouseWheel=""
        width="100%"
        maxWidth="1000px"
        margin="0 auto"
        height="3800"
        background="transparent"
      ></iframe>
    </div>
  </Layout>
)

export default TechLanding
