import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
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
//on top renaming siteMetadata to info

const Header = () => {
  const data = useStaticQuery(getData)

  //console.log(data)

  return (
    <div>
      <h1>Now displaying the data</h1>
      <div>
        <h3>title: {data.site.info.title}</h3>
        <h3>Name: {data.site.info.person.name}</h3>
      </div>
      <hr />
    </div>
  )
}

export default Header
