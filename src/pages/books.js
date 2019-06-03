import React from 'react';
import { Helmet } from 'react-helmet';

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Link } from "gatsby"
import styles from '../styles/books.scss';

import BooksList from '../components/BooksList';

const BooksPage = () => {
    return (
        <div>
            <Helmet>
                {/* <style>{ 'body {background-color: #F9CB5E' }</style> */}
            </Helmet>
            <Layout>
                <SEO title='books'/>
                <div className='booksList'>
                    <BooksList />
                </div>
            </Layout>
        </div>
    )
}

export default BooksPage