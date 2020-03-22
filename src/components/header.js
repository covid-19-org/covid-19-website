import PropTypes from "prop-types"
import React from "react"
import code4covid from "../images/code4covid.svg"
import { Link } from "gatsby"

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
      <Link to="/">
        <img
          style={{ marginBottom: 0 }}
          src={code4covid}
          alt="code4covidLogo"
        />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Code4Covid`,
}

export default Header
