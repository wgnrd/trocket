import './CountryInfo.css';
import React from 'react';

const CountryInfo = ({ loading, data }) => {
  if (!data || loading) return <div className="loader"></div>;
  if (data.countries.length === 0)
    return <p className="notfound">No country found 🤔</p>;

  // Adds dots after 3 digits to better read the large population numbers
  const formatInteger = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return data.countries.map((country) => (
    <div key={country.id} className="result">
      <h2>{country.name}</h2>
      <p>
        <b>Population: </b>
        <span>{formatInteger(country.population)}</span>
      </p>
      <p>
        <b>Continent: </b>
        <span>{country.continent?.name}</span>
      </p>
      <p>
        <b>Capital City: </b>
        <span>{country.capital?.name}</span>
      </p>
      <p>
        <b>Currency: </b>
        <ul className="result__list">
          {country.currencies.map((currency) => (
            <li key={currency.id}>
              {currency.name} | {currency.unitSymbols}
            </li>
          ))}
        </ul>
      </p>
      <p>
        <b>Language: </b>
        <ul className="result__list">
          {country.languages.map((language) => (
            <li key={language.id}>{language.name}</li>
          ))}
        </ul>
      </p>
    </div>
  ));
};

export default CountryInfo;
