import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import '../styles/books.scss';

export function Books ({data}) {
  console.log("this is data", data);
  return (
    <div className='section-items'>
      {data.edges.map(({ node }, index) => (
        <SingleBook key={index} index={index} node={node} />
      ))}
    </div>

  )
}


export function SingleBook (props) {
  return ( 
  <li className='book'>
    {/* <input type='checkbox' disabled defaultChecked={props.node.frontmatter.done} /> */}
    <div className='bookTitle'>
      <h4>{props.node.frontmatter.title}</h4>
    </div>
    <div className='bookInfo'>
      <p>{props.node.frontmatter.description}</p>
    </div>
    <div className='bookFooter'>
      {props.node.frontmatter.topic}
      {props.node.frontmatter.goal}
    </div>

  </li>
  )
}
const topicsList = [];

function topics(data) {
  const topicsList = [];
  data.allMarkdownRemark.edges.map(({ node }, index) => {
    // console.log(node);
    topicsList.push(node.frontmatter.topic);
    

  })
  return topicsList.join(', ');
};
console.log(topicsList);

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
            <h2 className='section-title'>books</h2>    
            <h1>Hi! You are currently reading {data.allMarkdownRemark.edges.length} books about {topics(data)}. Enjoy!</h1>
          </div>
          <Books data={data.allMarkdownRemark}/>
          </div>
    </div>
  )
}
