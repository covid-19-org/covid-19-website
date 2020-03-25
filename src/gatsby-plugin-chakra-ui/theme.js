import React from "react"
import { theme } from "@chakra-ui/core"

export default {
  ...theme,
  icons: {
    ...theme.icons,
    menu: {
      path: (
        <path
          fill="currentColor"
          d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"
        ></path>
      ),
    },
  },
}
