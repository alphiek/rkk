import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

const MainImage = styled(Img)`
  margin-left: 1em;
  margin-top: -3em;
  width: 24em;
  height: auto;
  position: relative;
  transform: perspective(2000px) rotateX(15deg) rotateY(-15deg) rotateZ(15deg);
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);

  @media only screen and (max-width: 1024px) {
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 28em;
  }

  @media only screen and (max-width: 824px) {
    margin-top: 2em;
    width: 26em;
  }

  @media only screen and (max-width: 570px) {
    margin-top: 3em;
    width: 20em;
  }
`
const SeoImage = ({ data }) => {
  return (
    <>
    <Fade right>
      <MainImage
        backgroundColor={true}
        fluid={data.imageOne.childImageSharp.fluid} alt='SEO Image' />
    </Fade>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query SEO {
        imageOne: file(relativePath: { eq: "SEO.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <SeoImage data={data} />
  }
  />
)
