import React, { Component } from 'react'
import Burger from './Burger'
import Logo from './Logo'
import MenuContainer from './MenuContainer'
import { StaticQuery, graphql } from 'gatsby'
import BrowseBtn from './BrowseBtn'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true,
      links: [],
      desktop: true,
      tablet: false,
      mobile: false,
      menu: true,
      contact: false,
      about: false
    }
    this.updatePredicate = this.updatePredicate.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.renderAbout = this.renderAbout.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.renderContact = this.renderContact.bind(this)
  }
  componentDidMount() {
    let items = this.props.links

    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)

    items.forEach(item => {
      this.setState(previous => ({
        links: [...previous.links, item]
      }))
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
      this.setState({
        desktop: window.innerWidth > 1024,
        tablet: window.innerWidth <= 1024 && window.innerWidth > 824,
        mobile: window.innerWidth <= 824
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
      return (
        <React.Fragment>
          <Burger
            onClick={this.toggleHidden}
            isHidden={this.state.isHidden}/>
          {
            !this.state.isHidden ?
              <MenuContainer
              compProps={this.state}
              toggleHidden={this.toggleHidden}
              renderMenu={this.renderMenu}
              renderAbout={this.renderAbout}
              renderContact={this.renderContact}
              /> :
              null
          }
          <Logo />
          {
            this.state.mobile && this.state.isHidden ?
              <BrowseBtn toggleHidden={this.toggleHidden} />
              : null
          }
        </React.Fragment>
      )
    }
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
