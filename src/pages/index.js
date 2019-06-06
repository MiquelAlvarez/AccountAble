import React, { useState } from "react"
import { graphql } from 'gatsby';

// import { Link } from "gatsby"

import Layout from "../components/layout"
import TodoList from '../components/todoList'
import { TodosLength, Todos } from '../components/todoList'
import { Books } from '../components/booksList'
import { Goals } from '../components/goalsList'
// import Image from "../components/image"
import SEO from "../components/seo"
// import netlifyIdentity from 'netlify-identity-widget';

import '../styles/main.scss'


export const data = graphql`
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
           topic
         }
       }
     }
   }
}
`;

export default ({ data }) => {
  return (
    < Layout >
      <SEO title="Home" />
      {/* <TodosLength data={data.todos} /> */}
      <Todos data={data.todos} />
      <Books data={data.books} />
      {/* <Goals data={data.goals} /> */}
    </Layout >
  )
}
