import React, { useState, useEffect } from 'react'
import Layout from '../Common/Layout';
import { useComponentsWithSearch } from '../Api/methods';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ComponentOverview from '../ComponentOverview';

// TODO: 
// style fixes (remove hardcoding)

function Home() {
    const [searchText, setSearchText] = useState('');
    const [selectedComponent, setSelectedComponent] = useState(null);

    // TODO: handle error and loading ui
    const { status, data: componentsData , error, isFetching } = useComponentsWithSearch(['component', searchText], searchText);
    
    const components = componentsData?.components?.data.map(({ id, attributes }) => ({ id, ...attributes }));

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

    return (
        <div className="home-container">
            <Layout>
                <div style={{
                    margin: '40px'
                }}>
                    <div style={{ width: 300}}>
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