let fetch = require("node-fetch");

async function getCountry(countryName) {
  try {
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
    let country = await response.json();
    return country[0].name;
  } catch (error) {
    return "Error al consultar la api";
  }
}

(async function() {
  let country = await getCountry("Argentina");
  console.log("country", country);
})();
