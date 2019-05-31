import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 



export default ({children}) => {
  const data = useStaticQuery(
    graphql`
    query Books {
      allMarkdownRemark(filter: {collection: {eq: "todos"}}) {
    edges {
      node {
        id
        frontmatter {
          date
          title
        }
      }
    }
  }
}
  `)
  console.log(data)
  return (
        <div className='todoList'>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>{node.frontmatter.title}</li>
        ))}
            <li></li>
            <li>Dos</li>
            <li>Tres</li>
        </div>
  )
}