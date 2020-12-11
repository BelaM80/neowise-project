async function getNasaData(title) {
  const url = `https://images-api.nasa.gov/search?q=${title}`;
  const response = await fetch(url);
  const nasaData = await response.json();
  return nasaData;
}
exports.getNasaData = getNasaData;
