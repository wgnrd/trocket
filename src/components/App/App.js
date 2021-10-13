import './App.css';

import { useLazyQuery } from '@apollo/client';
import Searchbar from '../Searchbar/Searchbar';
import { COUNTRY_BY_CODE } from '../../graphQl/Queries';
import CountryInfo from '../CountryInfo/CountryInfo';

function App() {
  const [getCountryByCode, { data, loading }] = useLazyQuery(COUNTRY_BY_CODE);

  const onSearchChange = (searchInput) => {
    // if the search is less then 2 characters, we can skip the query to the server
    if (searchInput.length < 2) return;

    getCountryByCode({
      variables: { code: searchInput },
    });
  };
  return (
    <div>
      <h1>GraphQL Country Client</h1>
      <Searchbar onChange={onSearchChange} />
      <CountryInfo data={data} loading={loading} />
    </div>
  );
}

export default App;
