const fetch = require("node-fetch");

async function getNasaPicture(date) {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_API_KEY}
`;
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
