import PropTypes from "prop-types"
import {
  DarkMode,
  Button,
  Flex,
  Stack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Image,
  useDisclosure,
  css,
} from "@chakra-ui/core"
import React from "react"
import code4covid from "../images/code4covid.svg"
import { Link } from "gatsby"

const PAGES = [
  { children: "Home", to: "/" },
  { children: "Resources", to: "/resources/" },
  { children: "Volunteer", to: "/tech-landing/" },
]

const NavLink = props => (
  <Button variant="ghost" size="md" as={Link} fontWeight={500} {...props} />
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      as="header"
      backgroundColor="white"
      paddingX={["1rem", "4.5rem"]}
      paddingY={[1,6]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Image
          src={code4covid}
          alt="code4covidLogo"
          width={[125, 200]}
        />
      </Link>
      <IconButton
        display={["block", "block", "none"]} // Match this with the inverse of the buttons stack to use Chakra breakpoints
        variant="ghost"
        size="lg"
        aria-label="Navigation Button"
        icon="menu"
        onClick={onOpen}
      />
      <Stack
        display={["none", "none", "block"]}
        as="nav"
        direction="row"
        spacing={1}
      >
        {PAGES.map(page => (
          <NavLink key={page.children + page.to} fontWeight={700} {...page} />
        ))}
      </Stack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DarkMode>
          <DrawerContent backgroundColor="gray.700" color="white">
            <DrawerCloseButton />
            <DrawerBody>
              <Stack as="nav" direction="column" marginTop={16} spacing={8}>
                {PAGES.map(page => (
                  <NavLink
                    key={page.children + page.to}
                    fontSize={28}
                    color="white"
                    css={css`
                      [aria-current]& {
                        font-weight: 700;
                      }
                    `}
                    {...page}
                  />
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DarkMode>
      </Drawer>
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Code4Covid`,
}

export default Header