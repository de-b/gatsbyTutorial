import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"
const examples = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <p>Hello from example page</p>
        <Header />
        <HeaderStatic />
        <div>
          <u>getting data via page query</u>
        </div>
        <h5>Author: {data.site.info.author}</h5>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`

export default examples
