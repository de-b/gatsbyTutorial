import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/beach.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "beach.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "desert.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const ImagesData = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed / Blur Image</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default ImagesData
