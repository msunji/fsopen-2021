import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  // Effect hook
  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
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
      {queryMatches.length > 10 ? (
        <p>Too many results. Try something more specific.</p>
      ) : (
        queryMatches.map((queryMatch) => (
          <div key={queryMatch.name}>
            <p>{queryMatch.name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
