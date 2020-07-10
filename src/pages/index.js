import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1>Hello home page</h1>
      <h2>layout css</h2>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
