import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './Global/GlobalStyle'
import HeaderDisplay from './Header/HeaderDisplay'
import FooterDisplay from './Footer/FooterDisplay'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <HeaderDisplay />
    <main>{children}</main>
    <FooterDisplay />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
