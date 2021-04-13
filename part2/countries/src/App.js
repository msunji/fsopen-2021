import React, { useState, useEffect } from "react";
import axios from "axios";

// const SingleCountry = () => {

// }

const CountryList = ({ countryMatches }) => {
  if (countryMatches.length > 10) {
    return <p>Too many results. Try something more specific.</p>;
  } else if (countryMatches.length < 10 && countryMatches.length > 1) {
    return (
      <div>
        {countryMatches.map((countryMatch) => (
          <div key={countryMatch.name}>
            <p>{countryMatch.name}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>{countryMatches[0].name}</h1>
        <p>capital: {countryMatches[0].capital}</p>
        <p>population: {countryMatches[0].population}</p>

        <h2>languages</h2>
        <ul>
          {countryMatches[0].languages.map((language) => (
            <li>{language.name}</li>
          ))}
        </ul>

        <img
          src={countryMatches[0].flag}
          alt="the flag of {countrMatches[0].name}"
          width="30%"
        />
      </div>
    );
  }
};

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  // Effect hook
  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      console.log(res.data);
      setCountries(res.data);
    });
  };

  useEffect(hook, []);

  // handle matching query
  // if no query specified, return an empty array, otherwise, filter the country list based on country name + specified query
  const queryMatches =
    query.length === 0
      ? []
      : countries.filter((country) =>
          country.name.toLowerCase().includes(query)
        );

  // event handlers
  const handleQuery = (e) => {
    const inputVal = e.target.value.toLowerCase();
    setQuery(inputVal);
  };

  return (
    <div>
      find countries: <input value={query} onChange={handleQuery} />
      <h1>Search Results</h1>
      {queryMatches.length === 0 ? (
        ""
      ) : (
        <CountryList countryMatches={queryMatches} />
      )}
    </div>
  );
}

export default App;
