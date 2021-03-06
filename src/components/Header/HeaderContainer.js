import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose';
import Burger from './Burger'
import MenuContainer from './MenuContainer'
import Logo from './Logo'
import Breakpoint from 'react-socks'
import { color } from '../Global/variables'

const Wrapper = posed.div({
  enter: { y: '0%',
    transition: {type: 'spring', stiffness: 100, damping: 20, mass: 1 }
},
  exit: { y: '100%', 
    transition: {type: 'spring', stiffness: 70, damping: 20, mass: 2}
}
});


const PoseWrapper = styled(Wrapper)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${color.primaryFull};
  z-index: 8;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

class HeaderContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true,
      links: [],
      contact: true,
      form: false,
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
        {
          isHidden: !this.state.isHidden
        },
        () => {
          window.scrollTo(0, 0)
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

    render() {
      return (
       <header>
        <Breakpoint desktop only>
        <Burger
          onClick={this.toggleHidden}
          isHidden={this.state.isHidden}/>
        <PoseGroup>
        {
        !this.state.isHidden &&
          <PoseWrapper key='Modal'>
            <MenuContainer
              key='Menu'
              toggleForm={this.toggleForm}
              compProps={this.state}
              toggleHidden={this.toggleHidden}
            />
          </PoseWrapper >
        }
        </PoseGroup>
        </Breakpoint>
        <Logo />
      </header>
      )
  }
}

HeaderContainer.propTypes = {
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
    render={data => <HeaderContainer links={data.site.siteMetadata.menuLinks}/>}
  />
)
