import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 



export default ({children}) => {
  const data = useStaticQuery(
    graphql`
    query Todos {
      allMarkdownRemark(filter: {collection: {eq: "todos"}}) {
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
  `)
  console.log(data)
  return (
        <div className='todoList'>
          <h2>Todos</h2>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <li key={index}>
              <input type='checkbox' disabled defaultChecked={node.frontmatter.done}/>
              {node.frontmatter.title}
            </li>
          ))}
        </div>
  )
}