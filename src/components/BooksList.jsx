import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 

export default ({data}) => {
    return (
    <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>books</h2>    
            <h1>Hi! You are currently reading 4 books about design, productivity and music theory. Enjoy!</h1>
          </div>
          <div className='section-items'>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <li key={index}>{node.frontmatter.title}</li>
            ))}

        </div>
          </div>
    </div>
  )
}