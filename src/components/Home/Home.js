import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_LAUNCHES } from '../../graphQl/Queries';

function Home() {
  const { data, loading, error } = useQuery(LOAD_LAUNCHES, {
    variables: { limit: 4 },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <div>
      {data.launchesPast.map((launch) => (
        <div key={launch.id}>
          <h2>Launch</h2>
          <p>
            <b>Name: </b>
            {launch.mission_name}
          </p>
          <p>
            <b>Time: </b>
            {launch.launch_date_utc.toString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
