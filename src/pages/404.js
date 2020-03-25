import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Text, Box } from "@chakra-ui/core"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box
      as="section"
      fontSize={[16, 24]}
      maxWidth={800}
      paddingX={["1rem", "4.5rem"]}
      paddingY={8}
    >
      <Heading>NOT FOUND</Heading>
      <Text>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Box>
  </Layout>
)

export default NotFoundPage
