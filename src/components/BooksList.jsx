import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 



export default ({children}) => {
  const data = useStaticQuery(
    graphql`
    query Books {
      allMarkdownRemark(filter: {collection: {eq: "books"}}) {
    edges {
      node {
        id
        frontmatter {
          date
          title
          topic
        }
      }
    }
  }
}
  `)
  console.log(data)
  return (
        <div className='bookList'>
        <h2>Books</h2>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>{node.frontmatter.title}</li>
        ))}
        </div>
  )
}