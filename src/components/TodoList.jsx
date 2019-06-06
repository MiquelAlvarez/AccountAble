import React from 'react';
import '../styles/todos.scss';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export function Todos ({data}) {
  console.log("this is data", data);
  return (
    <div className='section-items'>
      {data.edges.map(({ node }, index) => (
        <SingleTodo key={index} index={index} node={node} />
      ))}
    </div>

  )
}
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



  console.log(data.allMarkdownRemark);
return (
        <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>todos</h2>    
            <h1>Hi! You currently have {data.allMarkdownRemark.edges.length} todos pending. Keep up the good work!</h1>
          </div>
            <Todos data={data.allMarkdownRemark}/>
          </div>
    </div>

  )
}


export function TodosLength({data}) {
  return (
    (data.edges).length
  )
}
