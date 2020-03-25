import React, { useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Spinner, Heading, Box } from "@chakra-ui/core"

/**
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
 */

const TechVolunteerLanding = () => {
  const spinnerRef = useRef();

  const hideSpinner = () => spinnerRef.current.style.display = 'none';

  return (
  <Layout>
      <SEO title="Home" />
      <Box textAlign="center">
        <Heading>Get involved!</Heading>

        <Spinner ref={spinnerRef} marginTop={200}/>

        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          title="Sign Up Form"
          src="https://airtable.com/embed/shruuF50gMQCJFkW0?backgroundColor=blue"
          className="airtable-embed airtable-dynamic-height"
          frameBorder="0"
          width="100%"
          height="3900"
          background="transparent"
          onLoad={hideSpinner}
        ></iframe>
      </Box>
    </Layout>
  )
};

export default TechVolunteerLanding
