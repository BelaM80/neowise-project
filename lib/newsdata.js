const fetch = require("node-fetch");

async function getNewsData() {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";
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

exports.getNewsData = getNewsData;
