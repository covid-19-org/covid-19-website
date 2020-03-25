import PropTypes from "prop-types"
import React from "react"
import { Box, Image } from '@chakra-ui/core';
import code4coviddark from "../images/code4coviddark.svg"

const Footer = () => (
  <Box
    as="footer"
    backgroundColor="#2F3B45"
    paddingX={["1rem", "4rem"]}
    paddingY={"1rem"}
  >
    <Image
      src={code4coviddark}
      alt="code4covidLogo"
    />
  </Box>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
