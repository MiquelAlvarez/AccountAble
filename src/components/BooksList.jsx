import React from 'react';

const BooksComponent = ({data}) => {
    return (
    <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>books</h2>    
            <h1>Hi! You are currently reading {data.edges.length} books about design, productivity and music theory. Enjoy!</h1>
          </div>
          <div className='section-items'>
            {data.edges.map(({ node }, index) => (
              <li key={index}>{node.frontmatter.title}</li>
            ))}

        </div>
          </div>
    </div>
  )
}

export default ({ data }) => {
  return (
    <BooksComponent data={data}/>
  )
}
