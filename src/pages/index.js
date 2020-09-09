import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Button, Flex, Heading, Text, List, ListItem, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import { Redirect } from '@reach/router'
import Section from "../components/section"

const headerStyling = {
  color: "white",
  fontSize: ["32px"],
  maxWidth: "1400px",
  fontWeight: "bold",
  marginTop: [5,10],
}

const headerContainerProps ={
  width: ["100%", "100%", "100%", "100%","100%"],
}

const ctaProps = {
  color: "black",
  backgroundColor: "yellow",
  display: ["block","block","block","block","block"],
  fontSize: ["10px", "13px", "26px", "26px", "26px"],
  fontWeight: ["bold","bold","normal","normal","normal"],
  margin: [
    "40px -5px 0px -20px",
    "20px -60px 0px 10px",
    "80px -72px 0px 20px",
    "80px -72px 0px 20px",
    "80px -72px 0px 20px",
  ],
  padding: [
    "10px",
    "15px",
    "30px 30px 30px 80px",
    "30px 30px 30px 80px",
    "30px 30px 30px 80px",
  ],
  height: ["8em","8em","11em","9em","9em"],
  width: ["50%", "50%", "75%", "80%", "50%"],
  borderRadius: ["5px","5px","5px","0px","0px"]
}

const ctaHeadingProps = {
  display: ["none","none","block","block","block"],
  fontSize: ["32px", "32px", "32px", "32px", "32px"],
}

const buttonStyling = {
  backgroundColor: "yellow",
  margin: "40px 0px",
}

class IndexPage extends React.Component {

  componentDidMount(){
    setTimeout(() => { 
      if (typeof window !== `undefined`) window.location.replace(`https://covidtechsupport.com/`)
    }, 4000)
  }
  render() {

    return (  <Layout>
      <SEO title="Home" />
      <Section
        backgroundColor={"purple"}
        paddingY={[1,8]}
      >
        <Flex>
          <Box {...headerContainerProps}>
            <Text {...headerStyling}>We're making some changes, you will be redirected to our sister website</Text>
            <Link href="https://covidtechsupport.com/">
              <Button {...buttonStyling}>Click here if not redirected</Button>
            </Link>
          </Box>
        </Flex>
      </Section>
    </Layout>)
  }

}

export default IndexPage
