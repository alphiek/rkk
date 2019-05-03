import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'

const Instruction = styled.p`
  margin-top: 2em;
  text-align: right;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.lightGrey};
  text-transform: uppercase;
  font-size: 0.5em;
  @media (min-width: 824px) and (max-width: 1024px) {
    font-size: 0.7em;
}
`

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      items: []
    }
  }

  componentDidMount() {
    console.log(this.props.data)
    this.setState(
      {
      items: this.props.data,
      loaded: true
      },
      () => {
       console.log(this.state.items)
      }
    )
  }


      render() {
        const params = {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
        return (
          <div>
          {
            this.state.loaded ?
            <div style={{marginBottom: '3em'}}>
            <Swiper {...params}>
              <Img fluid={this.state.items.imageOne.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageTwo.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageThree.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageFour.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageSix.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageSeven.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageEight.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageNine.childImageSharp.fluid} />
              <Img fluid={this.state.items.imageTen.childImageSharp.fluid} />
            </Swiper>
            <Instruction>-----Swipe to view recent work------</Instruction>
            </div>
            :
            null
          }
         </div>
        )
      }
    }



    export default () => (
      <StaticQuery
        query={graphql`
          query Test {
            imageOne: file(relativePath: { eq: "Graphics/boy.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageTwo: file(relativePath: { eq: "Graphics/Friyay.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageThree: file(relativePath: { eq: "Graphics/Mates.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageFour: file(relativePath: { eq: "Graphics/Mobile.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          imageSix: file(relativePath: { eq: "Graphics/Think.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageSeven: file(relativePath: { eq: "Graphics/Time.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageEight: file(relativePath: { eq: "Graphics/Unicorn.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageNine: file(relativePath: { eq: "Graphics/Webdesign.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageTen: file(relativePath: { eq: "Graphics/Yippee.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
           }
          }
        `}
        render={data => <Carousel data={data} />
      }
      />
    )
