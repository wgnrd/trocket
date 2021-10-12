import { useQuery } from '@apollo/client';
import { CLIENT_COUNTRY_CODE } from '../../graphQl/Queries';
import React, { useState } from 'react';

const Searchbar = ({ onChange }) => {
  const { data, loading, error } = useQuery(CLIENT_COUNTRY_CODE);
  const [value, setValue] = useState();
  const placeHolderValue = 'e.g. RU';

  if (error) return <h1>Error..</h1>;

  if (loading)
    return <input disabled placeholder={placeHolderValue} value={''} />;

  // if the value of input field is undefined, prefill it with the countrycode of the client,
  // this also triggers the first query of the country itself in another component
  if (value === undefined) {
    const initSearchCode =
      data.client.ipAddress.country.alpha2Code.toUpperCase();
    setValue(initSearchCode);
    onChange(initSearchCode);
  }

  const onSearchChange = ({ target }) => {
    // switch case of new value
    setValue(target.value.toUpperCase());

    // push the value up
    onChange(target.value.toUpperCase());
  };

  return (
    <React.Fragment>
      <input
        type="text"
        name="searchbar"
        id="sbAlphaCode"
        placeholder={placeHolderValue}
        maxLength="2"
        value={value}
        onChange={onSearchChange}
        list="alphaCodes"
      />

      <datalist id="alphaCodes">
        {data &&
          data.countries.map((code) => (
            <option value={code.alpha2Code} key={code.id} />
          ))}
      </datalist>
    </React.Fragment>
  );
};

export default Searchbar;
