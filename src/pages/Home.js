import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import { getAllCountries } from "../services";
import "./Home.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

function Home() {
  const [allCountriesList, setAllCountriesList] = useState([]);
  const [filteredcountriesList, setFilteredCountriesList] = useState([]);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setAllCountriesList(countries);
      setFilteredCountriesList(countries);
      console.log(countries);
    });
  }, []);

  //handle region or country name change in filter
  useEffect(() => {
    console.log(region, countryName);
    if (region === "" && countryName === "") {
      setFilteredCountriesList(allCountriesList);
    } else {
      let filteredCountries = allCountriesList;
      if (region.length) {
        //step 1: filtering based on region
        filteredCountries = filteredCountries.filter((country) => {
          if (country.region === region) return true;
          return false;
        });
      }
      if (countryName.length) {
        //step 2: filtering based on country name
        filteredCountries = filteredCountries.filter((country) => {
          const lowercaseName = country.name.toLowerCase();
          if (lowercaseName.includes(countryName.toLowerCase())) return true;
          return false;
        });
      }
      setFilteredCountriesList(filteredCountries);
    }
  }, [region, countryName, allCountriesList]);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div className="App">
      <div className="filters">
        <TextField
          id="outlined-basic"
          label="Filter by Name"
          variant="outlined"
          value={countryName}
          onChange={handleCountryNameChange}
        />
        <FormControl sx={{ m: 1, minWidth: 160 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Filter by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select"
            value={region}
            label="Filter by Region"
            onChange={handleRegionChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="country-card-wrapper">
        {filteredcountriesList.map((country) => (
          <Link
            to={`/countries/${country.alpha3Code}`}
            style={{ textDecoration: "none" }}
            key={country.name}
          >
            <CountryCard
              key={country.name}
              countryName={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags?.png}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
