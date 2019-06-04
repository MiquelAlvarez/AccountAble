import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 



export default ({children}) => {
  const data = useStaticQuery(
    graphql`
    query Goals {
      allMarkdownRemark(filter: {collection: {eq: "goals"}}) {
        edges {
          node {
            id
            frontmatter {
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
        <div className='goalsList'>
          <h2>Goals</h2>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <li key={index}>
              <input type='checkbox' disabled defaultChecked={node.frontmatter.done}/>
              {node.frontmatter.title}
            </li>
          ))}
        </div>
  )
}
