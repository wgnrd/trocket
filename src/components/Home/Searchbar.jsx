import { useQuery } from '@apollo/client';
import { CLIENT_COUNTRY_CODE } from '../../graphQl/Queries';
import React from 'react';

const Searchbar = ({ onChange }) => {
  const { data, loading, error } = useQuery(CLIENT_COUNTRY_CODE);

  if (loading) return <h1>Loading...</h1>;
  return (
    <input
      type="text"
      name="searchbar"
      id="sbAlphaCode"
      placeholder="Top level domain"
      value={data.client.ipAddress.country.alpha2Code}
      maxLength="2"
      onChange={onChange}
    />
  );
};

export default Searchbar;
