import React from 'react'
import TabletMenu from './TabletMenu'
import MenuComponent from './MenuComponent'


const MenuContainer = (props) => {
  return (
    <React.Fragment>
      {props.compProps.desktop ?
        <MenuComponent
        toggleForm={props.toggleForm}
        compProps={props.compProps}
        toggleHidden={props.toggleHidden}
        /> :
        null
      }
      {props.compProps.tablet || props.compProps.mobile ?
        <TabletMenu
        compProps={props.compProps}
        toggleHidden={props.toggleHidden}
        toggleForm={props.toggleForm}
        renderMenu={props.renderMenu}
        renderAbout={props.renderAbout}
        renderContact={props.renderContact}
        /> :
        null
      }
    </React.Fragment>
  )
}

export default MenuContainer
