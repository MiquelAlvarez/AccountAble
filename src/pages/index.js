import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import TodoList from '../components/todoList'
import BooksList from '../components/booksList'
import GoalsList from '../components/goalsList'
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <TodoList/>
    <BooksList/>
    <GoalsList/>
  </Layout>
  
)

export default IndexPage
