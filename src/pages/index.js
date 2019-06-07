import React, { useState } from "react"
import { graphql } from 'gatsby';

// import { Link } from "gatsby"

import Layout from "../components/layout"
import TodoList from '../components/TodoList'
import { TodosLength, Todos } from '../components/TodoList'
import { Books } from '../components/BooksList'
import { Goals } from '../components/GoalsList'
// import Image from "../components/image"
import SEO from "../components/seo"
// import netlifyIdentity from 'netlify-identity-widget';
import Moment from 'react-moment';
import moment from 'moment';
import ProgressBar from 'react-progressbar.js';

import '../styles/main.scss'
import '../styles/index.scss'

var Line = ProgressBar.Line;

export const data = graphql`
{
  todos: allMarkdownRemark(filter: {collection: {eq: "todos"}}) {
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

  books: allMarkdownRemark(filter: {collection: {eq: "books"}}) {
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
`;

const TodosCover = ({ data }) => {
  return (
    < div >
    These are the todos
      <Todos data = { data } />
  </div>
  )
}
const BooksCover = ({ data }) => {
  return (
    < div >
    These are the books
      <Todos data = { data } />
  </div>
  )
}

const Today = new Date();
const now = moment(),
  tomorrow = moment().add(1, 'day').startOf('day'),
  difference = moment.duration(tomorrow.diff(now))
  ;

  const dayPassed = 1 - ((difference.asSeconds()/86400));
  
const containerStyle = {
  width: '200px',
  height: '200px'
}
  
export default ({ data }) => {
  return (
    < Layout >
      <SEO title="Home" />
      <div className='cover-content'>
        <div className='date'>
          <Moment date={Today} format='dddd DD, MMMM' />
          <Line
            progress={dayPassed}
            initialAnimate={true}
          />
        </div>
        {/* <TodosLength data={data.todos} /> */}
        <TodosCover data={data.todos} />
        <BooksCover data={data.books} />
             {/* <Goals data={data.goals} /> */}
      </div>
    </Layout >
  )
}
