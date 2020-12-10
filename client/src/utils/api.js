export const getNasaItems = async (query) => {
  const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
  const data = await response.json();

  const items = data.collection.items.map((item) => ({
    title: item.data[0].title,
    description: item.data[0].description,
    image: item.links[0].href,
  }));

  return items;
};
