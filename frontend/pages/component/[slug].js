import React from 'react';
import { useComponentsWithSearchInitialData, getComponentsBySlug } from '../../Api/methods';

function Component(props) {
    const { component } = props;

    return (
        <div>Component</div>
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