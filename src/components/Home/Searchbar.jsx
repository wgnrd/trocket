import { useQuery } from '@apollo/client';
import { CLIENT_COUNTRY_CODE } from '../../graphQl/Queries';
import React, { useState } from 'react';

const Searchbar = ({ onChange }) => {
  const { data, loading, error } = useQuery(CLIENT_COUNTRY_CODE);
  const [value, setValue] = useState();

  if (error) return <h1>Error..</h1>;
  if (loading) return <input disabled />;

  const onSearchChange = ({ target }) => {
    // switch case of new value
    setValue(target.value.toUpperCase());

    // push the value up
    onChange(target.value.toUpperCase());
  };

  // if the value of input field is undefined, prefill it with the countrycode of the client,
  // this also triggers the first query of the country itself in another component
  if (value === undefined) {
    const initSearchCode =
      data.client.ipAddress.country.alpha2Code.toUpperCase();
    setValue(initSearchCode);
    onChange(initSearchCode);
  }

  return (
    <input
      type="text"
      name="searchbar"
      id="sbAlphaCode"
      placeholder={'e.g. RU'}
      maxLength="2"
      value={value}
      onChange={onSearchChange}
    />
  );
};

export default Searchbar;
