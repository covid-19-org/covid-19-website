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
      <SEO title="Get Tech Support" />
      <Section
        fontSize={[16, 16, 24]}
        padding={[0]}
      >
        <AspectRatioBox ratio={1} width="100%" height="2460px">
          <Box
            as="iframe"
            title="naruto"
            src="https://airtable.com/embed/shrL2Y8xYRKSmy0dZ?backgroundColor=blue"
          />
        </AspectRatioBox>
      </Section>
    </Layout>
  )
};

export default TechVolunteers