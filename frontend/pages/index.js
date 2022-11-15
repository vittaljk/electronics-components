import { useState } from 'react';
import { getComponentsWithSearch, useComponentsWithSearchInitialData } from '../Api/methods';
import Home from '../components/Home';

export default function App(props) {
  const [searchText, setSearchText] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);

  const { initialComponentsData } = props;
  const { data: componentsData } = getComponentsWithSearch(['components', searchText], { searchText }, initialComponentsData);

  function handleSearchTextChange(_, newInputValue) {
    setSearchText(newInputValue);
  }

  function handleSelectComponent(_, selectedComponent) {
    setSelectedComponent(selectedComponent);
  }
  return (
    <Home 
      componentsData={componentsData}
      selectedComponent={selectedComponent}
      handleSelectComponent={handleSelectComponent}
      searchText={searchText}
      handleSearchTextChange={handleSearchTextChange}
    />
  )
}

export async function getStaticProps() {
  const initialComponentsData = await useComponentsWithSearchInitialData();
  return { props: { initialComponentsData } }
}