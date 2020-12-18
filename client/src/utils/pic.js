export const getNasaPicture = async (date) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=mm5t4ohZpMsQ8QRX7n5JrWQMZr6yLIsdTEKf2MAj`
  );
  const data = await response.json();

  console.log(data);
  return data;
};
