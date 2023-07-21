import axios from "axios";

const ALL_COUNTRY_API_ENDPOINT = "https://restcountries.com/v2";

export function getAllCountries() {
  //make an get request to the all countries api
  return axios.get(`${ALL_COUNTRY_API_ENDPOINT}/all`);
}
