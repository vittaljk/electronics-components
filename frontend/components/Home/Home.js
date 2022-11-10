import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../Common/Layout';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ComponentOverview from '../ComponentOverview';
import Button from '@mui/material/Button';
import { getComponentsData } from '../Common/helpers';
// TODO: 
// style fixes (remove hardcoding)

function Home() {
    const [searchText, setSearchText] = useState('');
    const [selectedComponent, setSelectedComponent] = useState(null);

    // TODO: handle error and loading ui
    // const { status, data: componentsData, error, isFetching } = useComponentsWithSearch(['component', searchText], searchText);

    // TODO: move this to getStaticPaths
    // const components = componentsData?.components?.data.map(({ id, attributes }) => ({ id, ...attributes }));

    // TODO: move this
    // const addComponentMutation = useMutation({
    //     mutationFn: async (variables) => {
    //         request(
    //             CONFIG.ENDPOINT,
    //             MUTATIONS.ADD_COMPONENT,
    //             variables
    //         )
    //     }
    // })

    // TODO: debounce
    // useEffect(() => {
    //     if (searchText && components?.length === 0) {
    //         console.log('Make google api call')
    //     }
    // }, [searchText, components])

    function handleSearchTextChange(_, newInputValue) {
        setSearchText(newInputValue);
    }

    function handleSelectComponent(_, selectedComponent) {
        setSelectedComponent(selectedComponent);
    }

    // function bulkUpload() {
    //     const componentsData = getComponentsData();
    //     console.log('componentsData', componentsData)
    //     componentsData.forEach(componentData => {
    //         addComponentMutation.mutate({componentData});
    //     });
    // }

    return (
        <Layout>
            {/* p-10 h-full */}
            <div className="home-container h-full flex items-center justify-center">
                {/* TODO: remove this */}
                {/* <Button variant="contained" onClick={bulkUpload}>Bulk upload</Button> */}
                <Link href="/component">Component</Link>
                <div className="w-2/4">
                    {/* <Autocomplete
                        id="search-component-autocomplete"
                        freeSolo
                        filterOptions={x => x}
                        getOptionLabel={(option) => (option ? option.name : "")}
                        options={components || []}
                        value={selectedComponent}
                        onChange={handleSelectComponent}
                        inputValue={searchText}
                        onInputChange={handleSearchTextChange}
                        renderInput={(params) => <TextField {...params} label="Search Component" />}
                    /> */}
                </div>
                {/* {searchText && components?.length !== 0 && selectedComponent !== null &&
                    <div className="mt-10">
                        <ComponentOverview component={selectedComponent} />
                    </div>
                }
                {searchText && components?.length === 0 &&
                    <>Suggestions from google</>
                } */}
            </div>
        </Layout>
    )
}

export default Home

export async function getStaticProps(context) {
    console.log("======================= inside getStaticProps ========================");
    // const { status, data: componentsData, error, isFetching } = useComponentsWithSearch(['component']);
    // console.log('componentsData', componentsData);
    return {
        props: {},
    }
}