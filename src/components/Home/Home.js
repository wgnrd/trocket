import React from 'react';
import { useQuery } from '@apollo/client';
import { COUNTRY_BY_CODE } from '../../graphQl/Queries';

function Home() {
  const { data, loading, error } = useQuery(COUNTRY_BY_CODE, {
    // variables: { limit: 4 },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <div>
      {data.countries.map((country) => (
        <div key={country.id}>
          <h2>Launch</h2>
          <p>
            <b>Name: </b>
            {country.name}
          </p>
          {/* <p>
            <b>Time: </b>
            {country.launch_date_utc.toString()}
          </p> */}
        </div>
      ))}
    </div>
  );
}

export default Home;
