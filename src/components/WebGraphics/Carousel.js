import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      items: []
    }
  }

  componentDidMount() {
    this.setState(
      {
      items: this.props.data,
      loaded: true
      })
  }


      render() {
        const params = {
          slidesPerView: 4,
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true,
          },
          breakpoints: {
            1920: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            824: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            570: {
              slidesPerView: 1,
              spaceBetween: 10
            },
          }
        }
        return (
          <div>
          {
            this.state.loaded ?
            <div style={{ marginBottom: '2em'}}>
                <Swiper {...params}>
                  <Img
                     backgroundColor={true}
                     fluid={this.state.items.imageTwo.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageThree.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageSeven.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageFour.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageOne.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageSix.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageEight.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageNine.childImageSharp.fluid} />
                  <Img
                    backgroundColor={true}
                    fluid={this.state.items.imageTen.childImageSharp.fluid} />
                </Swiper>
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
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageTwo: file(relativePath: { eq: "Graphics/Friyay.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageThree: file(relativePath: { eq: "Graphics/Mates.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageFour: file(relativePath: { eq: "Graphics/Mobile.png" }) {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          imageSix: file(relativePath: { eq: "Graphics/Think.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageSeven: file(relativePath: { eq: "Graphics/Time.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageEight: file(relativePath: { eq: "Graphics/Unicorn.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageNine: file(relativePath: { eq: "Graphics/Webdesign.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageTen: file(relativePath: { eq: "Graphics/Yippee.png" }) {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
           }
          }
        `}
        render={data => <Carousel data={data} />
      }
      />
    )
