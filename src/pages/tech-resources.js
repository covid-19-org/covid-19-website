import React from "react"
import { AspectRatioBox, Box, Heading, Button, Text, List, ListItem } from "@chakra-ui/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const textStyling = {
  fontSize: ["20px", "20px", "35px"],
  paddingY: 5,
  color: "white",
  fontWeight: "bold",
}

const TechVolunteers = () => {
  return (
    <Layout>
      <SEO title="Get Tech Resources" />
      <Section
        fontSize={[16, 16, 24]}
        padding={[0]}
      >
        <Box textAlign="center">
          {isLoading && <Spinner marginTop={200}/>}

          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
          <iframe
            title="Get Tech Resources"
            src="https://airtable.com/embed/shrL2Y8xYRKSmy0dZ?backgroundColor=blue"
            className="airtable-embed airtable-dynamic-height"
            frameBorder="0"
            width="100%"
            height="2330"
            background="transparent"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </Box>
      </Section>
    </Layout>
  )
};

export default TechVolunteers