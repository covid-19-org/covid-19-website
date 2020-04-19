import PropTypes from "prop-types"
import React from "react"
import { Box, Flex, Heading, ListItem, List, Link } from '@chakra-ui/core';
import { Link as GatsbyLink } from "gatsby";

import Code4CovidDark from "../images/code4coviddark.svg"
import TwitterIcon from "../images/twitter-icon.svg"

const Footer = () => (
  <Flex
    as="footer"
    backgroundColor="gray.700"
    paddingX={["1rem", "4.5rem"]}
    paddingY={"2rem"}
    justifyContent="space-between"
    minHeight={250}
  >
    <Box color="white">
      <Heading paddingBottom={5}>
        Useful Links
      </Heading>
      <List textDecoration="underline" lineHeight={2}>
        <ListItem>
          <GatsbyLink to="/tech-resources/">Get Tech Resources</GatsbyLink>
        </ListItem>
        <ListItem>
          <GatsbyLink to="/tech-volunteers">Tech Volunteers</GatsbyLink>
        </ListItem>
        <ListItem>
          <GatsbyLink to="/partner-with-us">Partner with Us</GatsbyLink>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/code4covid" isExternal>
            <TwitterIcon width={25} style={{ display: "inline" }} />
            <Box as="span" marginLeft="10px">Twitter</Box>
          </Link>
        </ListItem>
      </List>
    </Box>
    <Flex alignSelf="flex-end">
      <Code4CovidDark width={150} />
    </Flex>
  </Flex>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
