import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#222`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.2em`,
      }}
    >
      <h1 style={{ 
        margin: 0,
        fontSize: '0.7em' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle} / <small>being completely responsible for what I do.</small>
        </Link>
      </h1>
      <Link to='/todo/'>Todo List</Link>
      <Link to='/books/'>Books List</Link>
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
