import React, { Component } from 'react'
import FooterButton from './FooterButton'
import { StaticQuery, graphql } from 'gatsby'
import Footer from './Footer'
import PropTypes from 'prop-types'

class FooterComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      isHidden: false,
      links: [],
      menu: true,
      contact: false,
      about: false,
      form: false,
      tablet: true,
    }
    this.toggleHidden = this.toggleHidden.bind(this)
    this.renderAbout = this.renderAbout.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.renderContact = this.renderContact.bind(this)
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
        {isHidden: !this.state.isHidden},
        () => this.renderMenu(event)
      )
    }

    renderAbout(event) {
      event.preventDefault()
      this.setState(
        {
          menu: false,
          contact: false,
          about: true
        }
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

    renderContact(event) {
      event.preventDefault()
      this.setState(
        {
          menu: false,
          contact: true,
          about: false
        }
      )
    }

    renderMenu(event) {
      event.persist()
      this.setState(
        {
          menu: true,
          contact: false,
          about: false
        }
      )
    }

  render() {
    return(
      <>
      {
        this.state.isHidden ?
          <Footer
            compProps={this.state}
            toggleHidden={this.toggleHidden}
            toggleForm={this.toggleForm}
            renderMenu={this.renderMenu}
            renderAbout={this.renderAbout}
            renderContact={this.renderContact}
           />
           :
        <FooterButton toggleHidden={this.toggleHidden}/>
      }
      </>
    )
  }
}


export default () => (
  <StaticQuery
  query={graphql`
    query buttonQuery {
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
    render={data => <FooterComponent links={data.site.siteMetadata.menuLinks}/>}
  />
)

FooterComponent.propTypes = {
  links: PropTypes.array.isRequired
}
