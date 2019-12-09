let fetch = require("node-fetch");

function getCountry(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
}

let countryPromise = getCountry("Argentina");
countryPromise
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log("error:", error));
