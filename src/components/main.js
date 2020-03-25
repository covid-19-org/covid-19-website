import React from 'react'
import { Box } from '@chakra-ui/core';

const Main = ({ style, children }) => {
  return (
    <Box
      as="main"
      {...style}
    >
      {children}
    </Box>
  )
}

export default Main;