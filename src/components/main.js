import React from 'react'
import { Box } from '@chakra-ui/core';

const Main = ({ style, children }) => {
  return (
    <Box
      as="main"
      paddingX={["1rem", "4rem"]}
      {...style}
    >
      {children}
    </Box>
  )
}

export default Main;