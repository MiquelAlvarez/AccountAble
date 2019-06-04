import React from "react"
import { useStaticQuery, graphql } from 'gatsby'; 

// import { Link } from "gatsby"

import Layout from "../components/layout"
import TodoList from '../components/todoList'
import {TodosLength} from '../components/todoList'
import BooksList from '../components/booksList'
import GoalsList from '../components/goalsList'
// import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/main.scss'


export const query =   graphql`
{
  todos: allMarkdownRemark(filter: {collection: {eq: "todos"}}) {
     edges {
       node {
         id
         frontmatter {
           date
           title
           done
         }
       }
     }
   }
 
    books: allMarkdownRemark(filter: {collection: {eq: "books"}}) {
     edges {
       node {
         id
         frontmatter {
           date
           title
           done
         }
       }
     }
   }
}
`;

export default ({data}) => (
    <Layout>
      <SEO title="Home" />  
      {/* <TodosLength /> */}
      <TodoList data={data.todos}/>
      <BooksList data={data.books}/>
      <GoalsList/>
    </Layout>
  )
