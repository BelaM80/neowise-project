export const getNasaItems = async (title) => {
  const response = await fetch(`https://images-api.nasa.gov/search?q=${title}`);
  const data = await response.json();
  const items = data.collection.items.map((item) => ({
    title: item.data[0].title,
    description: item.data[0].description,
  }));
  return items;
};
