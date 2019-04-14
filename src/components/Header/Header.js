import React, { Component } from 'react'
import { color, font, weight } from '../Global/variables'
import Menu from '../Menu/MenuContainer'
import Burger from './Burger'

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <React.Fragment>
      <Burger />
      <div style={{
        height: '2.5em',
        width: 'auto',
        margin: '0.5em',
        textAlign: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        }}>
        <p style={{
          fontFamily: font.muli,
          color: color.body,
          fontSize: '0.9em',
          fontWeight: weight.black,
          borderBottom: `0.2em solid ${color.secondary}`,
        }}>
         RKK
        </p>
      </div>
      </React.Fragment>
    )
  }
}

export default Header
