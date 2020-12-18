const fetch = require("node-fetch");

async function getNasaPicture(date) {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=mm5t4ohZpMsQ8QRX7n5JrWQMZr6yLIsdTEKf2MAj`;
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

exports.getNasaPicture = getNasaPicture;
