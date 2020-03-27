import React from "react"
import { theme } from "@chakra-ui/core"

export default {
  ...theme,
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      700: "#2F3B45",
    },
    purple: "#B56AFF",
    yellow: "#FFEE56",
  },
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
