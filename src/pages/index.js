import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import TodoList from '../components/TodoList'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <div className='todoList'>
    <TodoList />
  </div>
  </Layout>
)

export default IndexPage
