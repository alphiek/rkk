import React from 'React'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

const MainImage = styled(Img)`
  margin-left: 3em;
  margin-top: -3em;
  width: 25em;
  height: auto;
  transform: perspective(2000px) rotateX(15deg) rotateY(-15deg) rotateZ(15deg);
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
`


const SeoImage = ({data}) => {
  return (
    <>
    <Fade right delay={900}>
    <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='SEO Image' />
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <SeoImage data={data} />
  }
  />
)
