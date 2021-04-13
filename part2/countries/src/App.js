import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryDetails = ({ country }) => {
  const { name, capital, population, languages, flag } = country;

  return (
    <div>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>population {population}</p>

      <h2>languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>

      <img src={flag} alt={`flag of ${name}`} width="30%" />
    </div>
  );
};

const Country = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  console.log(show);

  if (show) {
    return (
      <div key={country.name}>
        <p>
          {country.name}{" "}
          <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
        </p>
        <CountryDetails country={country} />
      </div>
    );
  }

  return (
    <div key={country.name}>
      <p>
        {country.name}{" "}
        <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
      </p>
    </div>
  );
};

const CountryList = ({ countryMatches }) => {
  if (countryMatches.length > 10) {
    return <p>Too many results. Try something more specific.</p>;
  } else if (countryMatches.length < 10 && countryMatches.length > 1) {
    return (
      <div>
        {countryMatches.map((countryMatch) => (
          <Country key={countryMatch.name} country={countryMatch} />
        ))}
      </div>
    );
  } else {
    return <CountryDetails country={countryMatches[0]} />;
  }
};

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  // Effect hook
  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      // console.log(res.data);
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
