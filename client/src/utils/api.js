export const getNasaData = async (title) => {
  const response = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
  const data = await response.text();
  return data;
};
