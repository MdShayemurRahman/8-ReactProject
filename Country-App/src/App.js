import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

// useState, useEffect, useReducer, useContext, useRef, useMemo

const URL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
        setFilteredCountries(json);
      });
  }, []);

  const handleRemoveCountry = (name) => {
    const filteredItems = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filteredItems);
  };

  const handleSearch = (searchText) => {
    const search = searchText.toLowerCase();
    var filtered = countries.filter((country) => {
      const formattedName = country.name.common.toLowerCase();
      return formattedName.startsWith(search);
    });
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country App</h1>
      <Search onHandleSearch={handleSearch} />
      <Countries
        countries={filteredCountries}
        onHandleRemove={handleRemoveCountry}
      />
    </div>
  );
};

export default App;
