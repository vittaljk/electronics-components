import { useState } from 'react';
import { useRouter } from 'next/router'
import { getComponentsWithSearch, useComponentsWithSearchInitialData } from '../Api/methods';
import Home from '../components/Home';

export default function App(props) {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);

  const { initialComponentsData } = props;
  const { data: componentsData } = getComponentsWithSearch(['components', searchText], { searchText }, initialComponentsData);

  function handleSearchTextChange(_, newInputValue) {
    setSearchText(newInputValue);
  }

  function handleSelectComponent(_, selectedComponent) {
    setSelectedComponent(selectedComponent);
    router.push(`component/${selectedComponent.slug}`);
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