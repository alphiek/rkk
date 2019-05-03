import React from 'React'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const MainImage = styled(Img)`
  margin-left: 3em;
  width: 25em;
  height: auto;
`


const SeoImage = ({data}) => {
  return (
    <MainImage fluid={data.imageOne.childImageSharp.fluid} alt='SEO Image' />
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
