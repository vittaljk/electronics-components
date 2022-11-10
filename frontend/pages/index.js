import Button from '@mui/material/Button';
import { addComponent, getComponentsWithSearch } from '../Api/methods';

// TODO: refer this
// https://tanstack.com/query/v4/docs/guides/ssr

export default function App(props) {  
  const { data } = getComponentsWithSearch(['components'], {searchText: ''})
  const addComponentMutation = addComponent();

  function add() {
      addComponentMutation.mutate({
        componentData: {
          name: 'test name 1',
          slug: 'test slug',
          modelNumber: 'test model number'
        }
      });
  }

  return (
    // <Home />  
    <>
      <Button variant="contained" onClick={add}>Bulk upload</Button>
    </>
  )
}

// export async function getStaticProps(context) {
//   console.log("======================= inside getStaticProps ========================");
//   // const { status, data: componentsData, error, isFetching } = useComponentsWithSearch(['component']);
//   // console.log('componentsData', componentsData);

//   return {
//       props: {},
//   }
// }