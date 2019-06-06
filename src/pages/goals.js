import React from 'react';
import { Helmet } from 'react-helmet';

import SEO from "../components/seo"
import Layout from '../components/layout'
import '../styles/layout.scss';

import GoalsList from '../components/goalsList';

const GoalsPage = () => {
    return (
    <Layout>
        <div className='section'>
            <Helmet>
                {/* <style>{ 'body {background-color: #F9CB5E' }</style> */}
            </Helmet>
            
                <SEO title='goals'/>
                <div className='goalsList'>
                    <GoalsList />
                </div>
        </div>
    </Layout>
    )
}

export default GoalsPage