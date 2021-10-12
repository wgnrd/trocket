import React from 'react';

const CountryInfo = ({ loading, data }) => {
  if (!data || loading) return <p>Loading country info</p>;
  if (data.countries.length === 0) return <p>No country found</p>;

  // Adds dots after 3 digits to better read the large population numbers
  const formatInteger = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return data.countries.map((country) => (
    <div key={country.id}>
      <b>Name: </b>
      {country.name}
      <br />
      <b>Population: </b>
      {formatInteger(country.population)}
      <br />
      <b>Continent: </b>
      {country.continent?.name}
      <br />
      <b>Capital City: </b>
      {country.capital?.name}
      <br />
      <b>Currency: </b>
      {country.currencies.map((currency) => (
        <li key={currency.id}>
          {currency.name} | {currency.unitSymbols}
        </li>
      ))}
      <b>Language: </b>
      {country.languages.map((language) => (
        <li key={language.id}>{language.name}</li>
      ))}
      <br />
    </div>
  ));
};

export default CountryInfo;
