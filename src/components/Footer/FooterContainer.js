import React, { Component } from 'react'
import FooterButton from './FooterButton'
import FooterComponent from './FooterComponent'
import styled from 'styled-components'
import { color } from '../Global/variables'
import posed, { PoseGroup } from 'react-pose';


const FooterWrapper = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    transition: {
      opacity: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 500 }
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 500 }
  }
});

const PoseWrapper = styled(FooterWrapper)`
  display: none;
  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
    display: block;
    top: 0;
    position: fixed;
    width: 100%;
    min-height: 100vh;
    background-color: ${color.primaryFull};
    z-index: 10;
  }
`

class FooterContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      isHidden: true,
      menu: true,
      contact: false,
      about: false,
      form: false,
    }
    this.toggleHidden = this.toggleHidden.bind(this)
    this.renderAbout = this.renderAbout.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.renderContact = this.renderContact.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

    toggleHidden(event) {
      event.preventDefault()
      this.setState(
        {
          isHidden: !this.state.isHidden
        },
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
        },
        () => {
          window.scrollTo(0, 0)
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
        },
        () => {
          window.scrollTo(0, 0)
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
        },
        () => {
          window.scrollTo(0, 0)
        }
      )
    }

  render() {
    return(
      <>
        <FooterButton
          toggleHidden={this.toggleHidden}
          isHidden={this.state.isHidden}
        />
        <PoseGroup>
        {
          !this.state.isHidden &&
          <PoseWrapper key='Modal'>
            <FooterComponent
              key='Menu'
              compProps={this.state}
              toggleHidden={this.toggleHidden}
              toggleForm={this.toggleForm}
              renderMenu={this.renderMenu}
              renderAbout={this.renderAbout}
              renderContact={this.renderContact}
             />
          </PoseWrapper >
        }
        </PoseGroup>
      </>
    )
  }
}

export default FooterContainer
