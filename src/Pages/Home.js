import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_LAUNCHES } from '../graphQl/Queries';

function Home() {
  const { data, error } = useQuery(LOAD_LAUNCHES);
  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <div>
      {data &&
        data.launchesPast.map((launch) => (
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
