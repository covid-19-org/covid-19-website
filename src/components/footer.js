import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import code4coviddark from "../images/code4coviddark.svg"

const Footer = () => (
  <footer
    style={{
      background: `#2F3B45`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img
        style={{ marginBottom: 0 }}
        src={code4coviddark}
        alt="code4covidLogo"
      />
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
