import React from 'react'
import { Box } from '@chakra-ui/core';

const Main = ({ children }) => {
  return (
    <Box as="main" flex={1}>
      {children}
    </Box>
  )
}

export default Main;