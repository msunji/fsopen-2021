import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherDetails = ({ weather }) => (
  <div>
    {weather && (
      <div>
        <h2>Weather Info</h2>
        <strong>Temperature:</strong> {weather.current.temperature} celsius
        <br />
        <img src={weather.current.weather_icons[0]} alt="weather icon" />
        <br />
        <strong>Wind:</strong> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}
      </div>
    )}
  </div>
);

const CountryDetails = ({ country, weather }) => {
  const { name, capital, population, languages, flag } = country;
  console.log(weather);

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

      <WeatherDetails weather={weather} />
    </div>
  );
};

const Country = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  // console.log(show);

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

const CountryMatches = ({ countryMatches, weather }) => {
  // console.log(countryMatches);
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
  } else if (countryMatches.length === 1) {
    return <CountryDetails country={countryMatches[0]} weather={weather} />;
  } else {
    return <p>Doesn't seem like you've put anything in the search field.</p>;
  }
};

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  // Effect hooks
  // Get list of countries
  const countriesHook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      const allCountries = res.data;
      // console.log(res.data);
      if (query.length !== 0) {
        const queryMatches = allCountries.filter((country) =>
          country.name.toLowerCase().includes(query)
        );
        setCountries(queryMatches);
      }
    });
  };

  useEffect(countriesHook, [query]);

  // Get weather
  const weatherHook = () => {
    const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
    const WEATHER_KEY = process.env.REACT_APP_WEATHER_API;

    if (countries.length === 1) {
      const { capital } = countries[0];
      axios
        .get(`${baseUrl}?access_key=${WEATHER_KEY}&query=${capital}`)
        .then((res) => {
          console.log(res.data);
          setWeather(res.data);
        });
    }
  };

  useEffect(weatherHook, [countries]);

  // event handlers
  const handleQuery = (e) => {
    const inputVal = e.target.value.toLowerCase();
    setQuery(inputVal);
  };

  return (
    <div>
      find countries: <input onChange={handleQuery} />
      <h1>Search Results</h1>
      <CountryMatches countryMatches={countries} weather={weather} />
    </div>
  );
}

export default App;
