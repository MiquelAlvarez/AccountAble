import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 
import '../styles/todos.scss';

const TodoComponent = ({data}) => {
  console.log("data", data.edges.length)
  return (
        <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>todos</h2>    
            <h1>Hi! You currently have {data.edges.length} todos pending. Keep up the good work!</h1>
          </div>
          <div className='section-items'>
            {data.edges.map(({ node }, index) => (
              <li key={index}>
                <input type='checkbox' disabled defaultChecked={node.frontmatter.done}/>
                {node.frontmatter.title}
              </li>
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

export default ({data}) => {

  console.log(data)

  return (
    <TodoComponent data={data}/>
    )
}