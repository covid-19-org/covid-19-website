import PropTypes from "prop-types"
import React from "react"
import { Box, Image, Flex, Heading, ListItem, List, Link as InlineLink } from '@chakra-ui/core';
import { Link } from "gatsby";

import code4coviddark from "../images/code4coviddark.svg"
import twitterIcon from "../images/twitter-icon.svg"

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
          <Link to="/support-resources">Support Resources</Link>
        </ListItem>
        <ListItem>
          <Link to="/tech-volunteers">Tech Volunteers</Link>
        </ListItem>
        <ListItem>
          <InlineLink href="https://twitter.com/code4covid" isExternal>
              <Image
                src={twitterIcon}
                alt="Twitter Icon"
                display="inline-block"
                marginRight="0.5rem"
                width="25px"
              />
            Twitter
          </InlineLink>
        </ListItem>
      </List>
    </Box>
    <Flex alignSelf="flex-end">
      <Image
        src={code4coviddark}
        alt="code4covidLogo"
        width={[125, 200]}
      />
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
