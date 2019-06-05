import React from 'react';
import { useStaticQuery } from 'gatsby';


export function SingleBook (props) {
  return ( 
  <li >
    <input type='checkbox' disabled defaultChecked={props.node.frontmatter.done} />
    {props.node.frontmatter.title}
    {props.node.frontmatter.topic}
  </li>
  )
}
const topicsList = [];

function topics(data) {
  // console.log(data.allMarkdownRemark.edges);
  data.allMarkdownRemark.edges.map(({ node }, index) => {
    // console.log(node);
    topicsList.push(node.frontmatter.topic);
    return topicsList;

  })
return ("hi")
};

export default ({children}) => {
  const data = useStaticQuery(
    graphql`
    query books {
      allMarkdownRemark(filter: {collection: {eq: "books"}}) {
        edges {
          node {
            id
            frontmatter {
              date
              title
              done
              topic
            }
          }
        }
      }
    }
  `)
  // console.log(data)



  topics(data);
    console.log(topicsList);
  
    return (
    <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>books</h2>    
            <h1>Hi! You are currently reading {data.allMarkdownRemark.edges.length} books about design, productivity and music theory. Enjoy!</h1>
          </div>
          <div className='section-items'>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <SingleBook key={index} index={index} node={node} />

            ))}

        </div>
          </div>
    </div>
  )
}
