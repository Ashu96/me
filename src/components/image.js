import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      uprise: file(relativePath: { eq: "uprise-co.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nykaa: file(relativePath: { eq: "nykaa-tv.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react101: file(relativePath: { eq: "react101.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      learnGatsby: file(relativePath: { eq: "learnGatsby.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log({ Image: data })
  if (data[props.imageName]) {
    return (
      <Img
        fluid={data[props.imageName].childImageSharp.fluid}
        className={`${props.isCourseImage ? "h-48" : ""}`}
      />
    )
  }
  return null
}

export default Image
