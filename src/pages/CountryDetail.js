// CountryDetail.js
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../services";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./CountryDetail.css";

export default function CountryDetail(props) {
  const { countryCode } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    getCountryDetails(countryCode).then((result) => {
      setDetails(result.data);
      console.log(result.data);
      setLoading(false);
    });
  }, [countryCode]);

  console.log(countryCode);

  return (
    <div className="country-detail-card">
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "green" }} />
        </div>
      ) : (
        <div className="country-content">
          <img src={details.flags?.png} alt={details.name} />
          <div>
            <div>
              Name: {details.name} | {details.nativeName}
            </div>
            <div>
              Region: {details.region} | {details.subregion}
            </div>
            <div>Capital: {details.capital}</div>
            <div>Area: {details.area} sq Km</div>
            <div>Population: {details.population}</div>
            <div>
              Currency:{" "}
              {details.currencies?.map((currency) => currency.name).join(", ")}
            </div>
            <div>
              Languages:{" "}
              {details.languages?.map((language) => language.name).join(", ")}
            </div>
            <div>
              Timezone:{" "}
              {details.timezones?.map((timezone) => timezone).join(", ")}
            </div>
            <div>
              Calling Code:{" "}
              {details.callingCodes
                ?.map((callingCode) => callingCode)
                .join(", ")}
            </div>
            <div>
              Lattitude & Longitude:{" "}
              {details.latlng?.map((latlng) => latlng).join(", ")}
            </div>
            <div>
              Border Countries:{" "}
              {details.borders?.map((border) => border).join(", ")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
