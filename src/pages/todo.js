import React from 'react';
import { Helmet } from 'react-helmet';

import SEO from "../components/seo"
import Layout from '../components/layout'
// import { Link } from "gatsby"
// import styles from '../styles/todos.scss';

import TodoList from '../components/TodoList';

const TodoPage = ({ data }) => {
    return (
        <div>
            <Helmet>
                {/* <style>{ 'body {background-color: #F9CB5E' }</style> */}
            </Helmet>
            <Layout>
                <SEO title='todos'/>
                <div className='todoList'>
                    <TodoList data={data} />
                </div>
            </Layout>
        </div>
    )
}

export default TodoPage
