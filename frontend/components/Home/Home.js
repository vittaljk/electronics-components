import React, { useState, useEffect } from 'react'
import Layout from '../Common/Layout';
import { useComponentsWithSearch, useAddComponent } from '../Api/methods';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ComponentOverview from '../ComponentOverview';
import Button from '@mui/material/Button';
import { useMutation } from "@tanstack/react-query";
import request from "graphql-request"
import { MUTATIONS } from "../Api/constants";
import CONFIG from '../../config';
import { getComponentsData } from '../Common/helpers';

// TODO: 
// style fixes (remove hardcoding)

function Home() {
    const [searchText, setSearchText] = useState('');
    const [selectedComponent, setSelectedComponent] = useState(null);

    // TODO: handle error and loading ui
    const { status, data: componentsData, error, isFetching } = useComponentsWithSearch(['component', searchText], searchText);

    const components = componentsData?.components?.data.map(({ id, attributes }) => ({ id, ...attributes }));

    // TODO: move this
    const addComponentMutation = useMutation({
        mutationFn: async (variables) => {
            request(
                CONFIG.BACKEND_URL,
                MUTATIONS.ADD_COMPONENT,
                variables
            )
        }
    })

    // TODO: debounce
    useEffect(() => {
        if (searchText && components?.length === 0) {
            console.log('Make google api call')
        }
    }, [searchText, components])

    function handleSearchTextChange(_, newInputValue) {
        setSearchText(newInputValue);
    }

    function handleSelectComponent(_, selectedComponent) {
        setSelectedComponent(selectedComponent);
    }

    function bulkUpload() {
        const componentsData = getComponentsData();
        console.log('componentsData', componentsData)
        // componentsData.forEach(componentData => {
        //     addComponentMutation.mutate({componentData});
        // });
    }

    return (
        <div className="home-container">
            <Layout>
                {/* TODO: remove this */}
                <Button variant="contained" onClick={bulkUpload}>Bulk upload</Button>
                <div style={{
                    margin: '40px'
                }}>
                    <div style={{ width: 300 }}>
                        <Autocomplete
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
                        />
                    </div>
                    {searchText && components?.length !== 0 && selectedComponent !== null &&
                        <ComponentOverview component={selectedComponent} />
                    }
                    {searchText && components?.length === 0 &&
                        <>Suggestions from google</>
                    }
                </div>
            </Layout>
        </div>
    )
}

export default Home