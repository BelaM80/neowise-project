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

  // const items = data.collection.items.map((item) => ({
  //   title: item.data[0].title,
  //   description: item.data[0].description,
  //   imageSrc: item.links[0].href,
  //   nasaId: item.data[0].nasa_id,
  // }));

  return data;
}

exports.getNasaData = getNasaItems;
