import React from 'react';
import { Helmet } from 'react-helmet';

import SEO from "../components/seo"
import Layout from '../components/layout'
import '../styles/layout.scss';

import BooksList from '../components/booksList';

const BooksPage = () => {
    return (
    <Layout>
        <div className='section'>
            <Helmet>
                {/* <style>{ 'body {background-color: #F9CB5E' }</style> */}
            </Helmet>
            
                <SEO title='books'/>
                <div className='booksList'>
                    <BooksList />
                </div>
        </div>
    </Layout>
    )
}

export default BooksPage