const fetch = require("node-fetch");

async function getNasaItems(query) {
  const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    json: true,
  });
  const data = await response.json();

  return data;
}

exports.getNasaData = getNasaItems;
