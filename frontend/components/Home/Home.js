import React from 'react'
import Layout from '../Common/Layout';
import { useComponentsWithSearch } from '../Api/methods';

function Home() {
    const { status, data, error, isFetching } = useComponentsWithSearch(['component'], 'b');
    console.log('data', data);

    return (
        <div className="home-container">
            <Layout>
                <h1>Home content</h1>
            </Layout>
        </div>
    )
}

export default Home