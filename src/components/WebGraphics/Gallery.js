import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const Gallery = ({data}) => {
  console.log(data)
  return (
    data.map(item => (
      <div>
      <Img fluid={item} />
      </div>
    ))    
  )
}


export default () => (
  <StaticQuery
    query={graphql`
      query WebGraphicsQuery {
        imageOne: file(relativePath: { eq: "WebDesign/LandspaceTheme.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "WebDesign/MditanoTheme.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "WebDesign/SignatureLeaf.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Gallery data={data} />
  }
  />
)
