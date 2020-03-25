import React from 'react'
import { Box } from '@chakra-ui/core';

const Main = ({ children }) => {
  return (
    <Box as="main">
      {children}
    </Box>
  )
}

export default Main;