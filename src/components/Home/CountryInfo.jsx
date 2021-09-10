import React from 'react';

const CountryInfo = ({ loading, data }) => {
  if (!data || loading) return <h2>Loading..</h2>;
  if (data.countries.length === 0) return <p>No country found</p>;

  return data.countries.map((country) => (
    <div key={country.id}>
      <p>
        <b>Name: </b>
        {country.name}
      </p>
    </div>
  ));
};

export default CountryInfo;
