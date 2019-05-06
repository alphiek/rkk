import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './Global/GlobalStyle'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <HeaderContainer />
    <main>{children}</main>
    <FooterContainer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
