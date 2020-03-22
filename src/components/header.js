import PropTypes from "prop-types"
import { Button, Flex, Stack, IconButton } from "@chakra-ui/core"
import React from "react"
import code4covid from "../images/code4covid.svg"
import { Link } from "gatsby"

const PAGES = [
  { children: "home", to: "/" },
  { children: "page 1", to: "/" },
  { children: "page 2", to: "/" },
]

const Header = () => (
  <header
    style={{
      background: `white`,
    }}
  >
    <Flex
      margin="0 auto"
      maxWidth={1300}
      padding="1.45rem 1.0875rem"
      justifyContent="space-between"
    >
      <Link to="/">
        <img
          style={{ marginBottom: 0 }}
          src={code4covid}
          alt="code4covidLogo"
        />
      </Link>
      <IconButton
        display={["block", "block", "none"]} // Match this with the inverse of the buttons stack to use Chakra breakpoints
        variant="ghost"
        size="lg"
        aria-label="Navigation Button"
        icon="menu"
      />
      <Stack
        display={["none", "none", "block"]}
        as="nav"
        direction="row"
        spacing={2}
      >
        {PAGES.map(page => (
          <Button
            variant="ghost"
            size="lg"
            key={page.children + page.to}
            as={Link}
            {...page}
          />
        ))}
      </Stack>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Code4Covid`,
}

export default Header
