import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import { getAllCountries } from "../services";
import "./Home.css";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
      console.log(countries);
    });
  }, []);

  return (
    <div className="App">
      <div className="country-card-wrapper">
        {countriesList.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            countryName={country.name}
            capital={country.capital}
            population={country.population}
            flagUrl={country.flags.png}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
