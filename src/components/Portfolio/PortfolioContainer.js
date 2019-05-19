import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PortfolioComponent from './PortfolioComponent'
import { TransWrap } from '../Global/TransWrap'


class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      isLoaded: false,
      grid: true,
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
      })
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

    if (event.target.id === 'close') {
      this.setState({
        grid: true,
        mainContent: {
          ...this.defaultStates
        }
      },
      () => {
        window.scrollTo(0, 0)
      })
    } else {
      this.setState({
        grid: false,
        mainContent: {
          ...this.defaultStates,
          [event.target.id]: true,
        }
      },
      () => {
        window.scrollTo(0, 0)
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
           grid={this.state.grid}
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
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        imageTwo: file(relativePath: { eq: "Thumbnail/lmlThumb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        imageThree: file(relativePath: { eq: "Thumbnail/ppdThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        imageFour: file(relativePath: { eq: "Thumbnail/lkThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      imageFive: file(relativePath: { eq: "Thumbnail/southCoastThumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
       }
       imageSix: file(relativePath: { eq: "Thumbnail/foragerThumb.png" }) {
         childImageSharp {
           fluid(maxWidth: 768) {
             ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
