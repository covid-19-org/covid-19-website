import React, { useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Spinner, Box } from "@chakra-ui/core"

const PartnerWithUs = () => {
  const spinnerRef = useRef()

  const hideSpinner = () => (spinnerRef.current.style.display = "none")

  return (
    <Layout>
      <SEO title="Partner With Us" />
      <Box textAlign="center">
        <Spinner ref={spinnerRef} marginTop={200} />

        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
        <iframe
          title="Partner with Us Form"
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrtSXiyO1dPOOfiW?backgroundColor=yellow"
          frameBorder="0"
          width="100%"
          height="3050"
          background="transparent"
          onLoad={hideSpinner}
        />
      </Box>
    </Layout>
  )
}

export default PartnerWithUs
