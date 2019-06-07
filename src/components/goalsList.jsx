import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import '../styles/goals.scss';

export function SingleGoal (props) {
  return ( 
  <li className='goal'>
    {/* <input type='checkbox' disabled defaultChecked={props.node.frontmatter.done} /> */}
    <div className='goalTitle'>
      <h4>{props.node.frontmatter.title}</h4>
    </div>
    <div className='goalInfo'>
      <p>{props.node.frontmatter.description}</p>
    </div>
    <div className='goalFooter'>
      {props.node.frontmatter.topic}
      {props.node.frontmatter.goal}
    </div>

  </li>
  )
}
// const topicsList = [];

// function topics(data) {
//   const topicsList = [];
//   data.allMarkdownRemark.edges.map(({ node }, index) => {
//     // console.log(node);
//     topicsList.push(node.frontmatter.topic);
    

//   })
//   return topicsList.join(', ');
// };
// console.log(topicsList);

export default ({children}) => {
  const data = useStaticQuery(
    graphql`
    query Goals {
      allMarkdownRemark(filter: {collection: {eq: "goals"}}) {
        edges {
          node {
            id
            frontmatter {
              date
              title
              done
              topic
              description
              Goal
            }
          }
        }
      }
    }
  `)
  // console.log(data)

    return (
    <div>
        <div className='section-content'> 
        
          <div className='section-brief'>
            <h2 className='section-title'>goals</h2>    
            <h1>Hi! You currently have {data.allMarkdownRemark.edges.length} goals you want to achieve. Go ahead!</h1>
          </div>
          <div className='section-items'>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <SingleGoal key={index} index={index} node={node} />

            ))}

        </div>
          </div>
    </div>
  )
}
