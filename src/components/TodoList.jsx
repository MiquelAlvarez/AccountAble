import React from 'react';
import '../styles/todos.scss';

export default (props) => {
  const todosInfo = props.data;
  console.log(todosInfo);
  return (
        <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>todos</h2>    
            <h1>Hi! You currently have {todosInfo.edges.length} todos pending. Keep up the good work!</h1>
          </div>
          <div className='section-items'>
            {todosInfo.edges.map(({ node }, index) => (
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
