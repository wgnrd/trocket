import React from 'react';
import { useLazyQuery } from '@apollo/client';
import Searchbar from './Searchbar';
import { COUNTRY_BY_CODE } from '../../graphQl/Queries';
import { useState } from 'react';

function Home() {
  const [searchKey, setSearchKey] = useState('');

  const [getCountryByCode, { data, loading, called }] =
    useLazyQuery(COUNTRY_BY_CODE);

  const onSearchChange = (event) => {
    if (event.target.value.length < 2) return;

    setSearchKey(event.target.value.toUpperCase());
    console.log(event.target.value.toUpperCase());
    getCountryByCode({
      variables: { code: searchKey },
    });
  };

  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>ERROR</h1>;

  return (
    <div>
      <Searchbar onChange={onSearchChange} />
      {!loading &&
        data &&
        data.countries.map((country) => (
          <div key={country.id}>
            <h2>{country.__typename}</h2>
            <p>
              <b>Name: </b>
              {country.name}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Home;
