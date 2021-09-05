import React from 'react';

const Searchbar = ({ onChange }) => {
  return (
    <input
      type="text"
      name="searchbar"
      id="sbAlphaCode"
      placeholder="Top level domain"
      maxLength="2"
      onChange={onChange}
    />
  );
};

export default Searchbar;
