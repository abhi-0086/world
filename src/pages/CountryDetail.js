import { useParams } from "react-router-dom";
import { getCountryDetails } from "../services";
import { useEffect, useState } from "react";
import "./CountryDetail.css";

export default function CountryDetail(props) {
  const { countryCode } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getCountryDetails(countryCode).then((result) => {
      setDetails(result.data);
      console.log(result.data);
    });
  }, [countryCode]);
  console.log(countryCode);
  return (
    <div className="country-detail-wrapper">
      <div>
        <img src={details.flags?.png} alt={details.name} />
      </div>
      <div>
        <div>
          Name : {details.name} | {details.nativeName}
        </div>
        <div>
          Region : {details.region} | {details.subregion}
        </div>
        <div>Capital : {details.capital}</div>
        <div>Area : {details.area} sq Km</div>
        <div>Population : {details.population}</div>
        <div>
          Currency :{" "}
          {details.currencies?.map((currency) => currency.name).join(", ")}
        </div>
      </div>
    </div>
  );
}
