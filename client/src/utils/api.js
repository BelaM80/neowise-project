export const getNasaItems = async (query) => {
  const response = await fetch(`/api/nasaItems/${query}`);
  const data = await response.json();

  const items = data.collection.items.map((item) => ({
    title: item.data[0].title,
    description: item.data[0].description,
    imageSrc: item.links[0].href,
    nasaId: item.data[0].nasa_id,
  }));

  return items;
};

export const getNasaPicture = async (date) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=mm5t4ohZpMsQ8QRX7n5JrWQMZr6yLIsdTEKf2MAj`
  );
  const data = await response.json();

  const pic = data.map((item) => ({
    title: item.title,
    explanation: item.explanation,
    imageSrc: item.url,
  }));

  return pic;
};
