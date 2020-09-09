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
  </Flex>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
