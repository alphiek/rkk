import React, { Component } from 'react'
import { TransWrap } from '../Global/TransWrap'
import { StaticQuery, graphql } from 'gatsby'
import PortfolioComponent from './PortfolioComponent'
import PropTypes from 'prop-types'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      isLoaded: false,
      mainContent: {
        fode: false,
        lml: false,
        ppd: false,
        lk: false,
        scc: false,
        forager: false
      }
    }
    this.onClickToggle = this.onClickToggle.bind(this)
  }


  componentDidMount() {
    this.setState(
      {
      images: this.props.data,
      isLoaded: true
      },
      () => {
       console.log('data loaded')
      }
    )
  }

  onClickToggle(event) {
    this.defaultStates = {
      'fode': false,
      'lml': false,
      'ppd': false,
      'lk': false,
      'scc': false,
      'forager': false
    }
    console.log(event.target.id)

    if (event.target.id === 'close') {
      this.setState({
        mainContent: {
          ...this.defaultStates
        }
      },
      () => {
        console.log('reset')
      })
    } else {
      this.setState({
        mainContent: {
          ...this.defaultStates,
          [event.target.id]: true
        }
      },
      () => {
        console.log('open')
      })
    }
  }

  render() {
    return (
      <>
      {this.state.isLoaded ?
        <TransWrap>
          <PortfolioComponent
           images={this.state.images}
           onClickToggle={this.onClickToggle}
           mainContent={this.state.mainContent}
          />
        </TransWrap>
          :
          null
      }
      </>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query Portfolio {
        imageOne: file(relativePath: { eq: "Thumbnail/fodeThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "Thumbnail/lmlThumb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "Thumbnail/ppdThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageFour: file(relativePath: { eq: "Thumbnail/lkThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      imageFive: file(relativePath: { eq: "Thumbnail/southCoastThumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
       }
       imageSix: file(relativePath: { eq: "Thumbnail/foragerThumb.png" }) {
         childImageSharp {
           fluid(maxWidth: 768) {
             ...GatsbyImageSharpFluid
           }
         }
        }
      }
    `}
    render={data => <PortfolioContainer data={data} />
  }
  />
)


PortfolioContainer.propTypes = {
  data: PropTypes.object.isRequired
}
