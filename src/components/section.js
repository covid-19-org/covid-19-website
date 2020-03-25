import React from 'react'
import { Box } from '@chakra-ui/core'

const Section = (props) => (
  <Box
    as="section"
    paddingX={["1rem", "4.5rem"]}
    {...props}
  >
    {props.children}
  </Box>
)

export default Section