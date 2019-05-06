import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Burger from './Burger'
import MenuComponent from '../Menu/MenuComponent'
import PropTypes from 'prop-types'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true,
      links: [],
      contact: true,
      form: false,
      tablet: false
    }
    this.toggleHidden = this.toggleHidden.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }
  componentDidMount() {
    let items = this.props.links

    items.forEach(item => {
      this.setState(previous => ({
        links: [...previous.links, item]
      }))
    })
  }

    toggleHidden(event) {
      event.preventDefault()
      this.setState(
        {isHidden: !this.state.isHidden}
      )
    }

    toggleForm(event) {
      event.preventDefault()
      this.setState(
        {
          form: !this.state.form
        }
      )
    }

    render() {
      return (
        <>
          <Burger
            onClick={this.toggleHidden}
            isHidden={this.state.isHidden}/>
          {
            !this.state.isHidden ?
              <MenuComponent
              toggleForm={this.toggleForm}
              compProps={this.state}
              toggleHidden={this.toggleHidden}
              /> :
              null
          }
        </>
      )
    }
}

Header.propTypes = {
  links: PropTypes.array.isRequired
}


export default () => (
  <StaticQuery
  query={graphql`
    query NavTestQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `}
    render={data => <Header links={data.site.siteMetadata.menuLinks}/>}
  />
)
