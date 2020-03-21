import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import code4covid from "../images/code4covid.svg"

const Header = () => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img style={{ marginBottom: 0 }} src={code4covid} alt="code4covidLogo" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
