import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Layout from '../Common/Layout';

function Home(props) {
    const {
        componentsData,
        selectedComponent,
        handleSelectComponent,
        searchText,
        handleSearchTextChange
    } = props;

    const components = componentsData?.components?.data.map(({ id, attributes }) => ({ id, ...attributes }));

    return (
        <Layout>
            <div className="h-full flex items-center justify-center">
                <div className="w-2/4">
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
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                label="Search Component" 
                                inputProps={{
                                    ...params.inputProps,
                                    onKeyDown: (e) => {
                                        if (e.key === 'Enter') {
                                            e.stopPropagation();
                                        }
                                    },
                                }}
                            />
                        }
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Home