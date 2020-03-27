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
  useDisclosure,
  css,
  Link,
} from "@chakra-ui/core"
import React from "react"
import Code4Covid from "../images/code4covid.svg"
import TwitterIcon from "../images/twitter-icon.svg";
import { Link as GatsbyLink } from "gatsby"

const PAGES = [
  { children: "Home", to: "/" },
  { children: "Support Resources", to: "/support-resources/" },
  { children: "Tech Volunteers!", to: "/tech-volunteers/" },
]

const NavLink = props => (
  <Button variant="ghost" fontSize="20px" as={GatsbyLink} fontWeight={500} {...props}/>
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
      <GatsbyLink to="/">
        <Code4Covid width={200}/>
      </GatsbyLink>
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
          <NavLink
            _hover={{ color: "gray.400" }}
            color="gray.700"
            fontWeight={700}
            key={page.children + page.to}
            css={css`
              [aria-current]& {
                color: #A0AEC0;
              }
            `}
            {...page}
          />
        ))}
        <Button
          as={Link}
          variant="ghost"
          _hover={{}}
          target="blank"
          href="https://twitter.com/code4covid"
          name="Twitter"
        >
          <TwitterIcon width={25} height={25} style={{ display: "inline-block" }} role="img"/>
        </Button>
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
                <Link textAlign="center" href="https://twitter.com/code4covid" isExternal>
                  <TwitterIcon width="40px" style={{ display: "inline-block" }} />
                </Link>
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