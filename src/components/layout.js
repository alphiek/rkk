import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './Global/GlobalStyle'
import Header from './Header/Header'

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
