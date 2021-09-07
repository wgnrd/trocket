import React from 'react';
import { useLazyQuery } from '@apollo/client';
import Searchbar from './Searchbar';
import { COUNTRY_BY_CODE } from '../../graphQl/Queries';

function Home() {
  const [getCountryByCode, { data, loading }] = useLazyQuery(COUNTRY_BY_CODE);

  const onSearchChange = (searchInput) => {
    if (searchInput.length < 2) return;

    getCountryByCode({
      variables: { code: searchInput },
    });
  };

  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>ERROR</h1>;

  return (
    <div>
      <Searchbar onChange={onSearchChange} />
      {
        // TODO - fix this conditional mess with a new component
        loading ? (
          <h2>Loading...</h2>
        ) : (
          data &&
          data.countries.map((country) => (
            <div key={country.id}>
              <h2>{country.__typename}</h2>
              <p>
                <b>Name: </b>
                {country.name}
              </p>
            </div>
          ))
        )
      }
    </div>
  );
}

export default Home;
