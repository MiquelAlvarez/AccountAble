import React from 'react';
import '../styles/todos.scss';
import { useStaticQuery } from 'gatsby';


export function SingleTodo (props) {
  console.log(props.node);
  return ( 
  <li >
    <input type='checkbox' disabled defaultChecked={props.node.frontmatter.done} />
    {props.node.frontmatter.title}
  </li>
  )
}

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



return (
        <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>todos</h2>    
            <h1>Hi! You currently have {data.allMarkdownRemark.edges.length} todos pending. Keep up the good work!</h1>
          </div>
          <div className='section-items'>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <SingleTodo key={index} index={index} node={node} />
            ))}

        </div>
          </div>
    </div>

  )
}


export function TodosLength({data}) {
  return (
    (data.edges).length
  )
}
