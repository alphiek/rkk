import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Burger from './Burger'
import posed, { PoseGroup } from 'react-pose';
import MenuComponent from './MenuComponent'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../Global/variables'


const Wrapper = posed.div({
  enter: { y: '0%',
    transition: { ease: 'easeOut', duration: 700 }
},
  exit: { y: '100%',
    transition: { ease: 'easeIn', duration: 500 }}
});

const PoseWrapper = styled(Wrapper)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${color.primaryFull};
  z-index: 5;
`

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
          <PoseGroup>
          {
            !this.state.isHidden &&
            <PoseWrapper key='Modal'>
              <MenuComponent
                key='Menu'
                toggleForm={this.toggleForm}
                compProps={this.state}
                toggleHidden={this.toggleHidden}
              />
            </PoseWrapper >
          }
          </PoseGroup>
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
