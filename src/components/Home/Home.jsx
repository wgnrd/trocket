import React from 'react';
import { useQuery } from '@apollo/client';
import Searchbar from './Searchbar';
import { COUNTRY_BY_CODE } from '../../graphQl/Queries';
import { useState } from 'react';

function Home() {
  const [searchKey, setSearchKey] = useState('AT');

  const { data, loading, error, refetch } = useQuery(COUNTRY_BY_CODE, {
    variables: { code: searchKey },
  });

  const onSearchChange = (event) => {
    if (event.target.value.length < 2) return;

    setSearchKey(event.target.value.toUpperCase());
    refetch();
  };

  // if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <div>
      <Searchbar onChange={onSearchChange} />
      {!loading &&
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
