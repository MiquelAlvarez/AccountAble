import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FiCheckCircle } from 'react-icons/fi'
import { FiHeadphones } from 'react-icons/fi'
import { FiBook } from 'react-icons/fi'
import { FiLifeBuoy } from 'react-icons/fi'
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Link to='/todo/'><FiCheckCircle /></Link>
    <Link to='/books/'><FiBook /></Link>
    <Link to='/goals/'><FiLifeBuoy /></Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
