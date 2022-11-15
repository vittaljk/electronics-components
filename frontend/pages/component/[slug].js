import React from 'react';
import { useComponentsWithSearchInitialData, getComponentsBySlug } from '../../Api/methods';
import ComponentOverview from '../../components/ComponentOverview/ComponentOverview';
import Layout from '../../components/Common/Layout';

function Component(props) {
    const { component } = props;

    return (
        <Layout>
            <div className="p-16">
                <ComponentOverview component={component}/>
            </div>
        </Layout>
    )
}

export default Component

export async function getStaticPaths() {
    const { components: { data: componentsData } } = await useComponentsWithSearchInitialData();
    const paths = componentsData.map(({ attributes: { slug } }) => ({
        params: { slug }
    }));
    
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    let component = null;

    const {components: { data } } = await getComponentsBySlug(slug);
    if (data?.length > 0) {
        [ component ] = data;
    }
    
    return {
        props: { component }
    }
}