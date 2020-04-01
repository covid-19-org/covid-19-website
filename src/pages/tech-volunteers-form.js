import React, { useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Spinner, Box } from "@chakra-ui/core"

const TechVolunteersForm = () => {
  const spinnerRef = useRef();

  const hideSpinner = () => spinnerRef.current.style.display = 'none';

  return (
  <Layout>
      <SEO title="Tech Volunteers Form" />
      <Box textAlign="center">
        <Spinner ref={spinnerRef} marginTop={200}/>

        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          title="Sign Up Form"
          src="https://airtable.com/embed/shrijsXl5oUozCq0p?backgroundColor=blue"
          className="airtable-embed airtable-dynamic-height"
          frameBorder="0"
          width="100%"
          height="2330"
          background="transparent"
          onLoad={hideSpinner}
        ></iframe>
      </Box>
    </Layout>
  )
};

export default TechVolunteersForm
