import { useState } from 'react';
import { addComponent, getComponentsWithSearch } from '../Api/methods';
import request from "graphql-request"
import { QUERIES } from "../Api/constants";
import { CONFIG } from '../config';
import Home from '../components/Home';
// TODO: refer this
// https://tanstack.com/query/v4/docs/guides/ssr

export default function App(props) {
  const [searchText, setSearchText] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);

  const { initialComponentsData } = props;
  const { data: componentsData } = getComponentsWithSearch(['components', searchText], { searchText }, initialComponentsData);


  // const addComponentMutation = addComponent();

  // function add() {
  //     addComponentMutation.mutate({
  //       componentData: {
  //         name: 'test name 1',
  //         slug: 'test slug',
  //         modelNumber: 'test model number'
  //       }
  //     });
  // }

  function handleSearchTextChange(_, newInputValue) {
    setSearchText(newInputValue);
  }

  function handleSelectComponent(_, selectedComponent) {
    setSelectedComponent(selectedComponent);
  }
  return (
    <>
      <Home 
        componentsData={componentsData}
        selectedComponent={selectedComponent}
        handleSelectComponent={handleSelectComponent}
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
    </>
    // <>
    //   <Button variant="contained" onClick={add}>Bulk upload</Button>
    // </>
  )
}

export async function getStaticProps() {
  // TODO: move query function to common place like useComponentsWithSearch that can be used in methods as well
  const initialComponentsData = await request(
    CONFIG.ENDPOINT,
    QUERIES.GET_COMPONENTS_WITH_SEARCH_QUERY,
    { searchText: '' }
  )
  return { props: { initialComponentsData } }
}