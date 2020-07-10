import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ProductTemplate = ({
  data: {
    product: {
      title,
      price,
      image: { fluid },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div className="singleProductSection" style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>Single Product: {title}</h1>
        <div className="infoBlock">
          <article>
            <Image fluid={fluid} />
          </article>
          <article>
            <div
              className="price"
              style={{ paddingBottom: "10px", fontWeight: "bold" }}
            >
              ${price}
            </div>
            <div className="info">{info}</div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      info {
        info
      }
      price
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ProductTemplate
