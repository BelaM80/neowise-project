const express = require("express");
const path = require("path");
const { getNasaData } = require("./lib/database");
const { getNasaPicture } = require("./lib/picturedata");
const { getNewsData } = require(".lib/newsdata");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3047;

app.get("/api/nasaItems/:query", async (request, response) => {
  const { query } = request.params;
  try {
    const nasaDataValue = await getNasaData(query);
    if (!nasaDataValue) {
      response.status(404).send("Could not find any Data");
      return;
    }
    response.send(nasaDataValue);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal error occured");
  }
});

app.get("/api/getNasaPicture/:date", async (request, response) => {
  const { date } = request.params;
  try {
    const nasaPicture = await getNasaPicture(date);
    if (!nasaPicture) {
      response.status(404).send("Could not find any Data");
      return;
    }
    response.send(nasaPicture);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal error occured");
  }
});

app.get("/api/getNewsData/articles", async (request, response) => {
  try {
    const spaceNews = await getNewsData();
    if (!spaceNews) {
      response.status(404).send("Could not find any Data");
      return;
    }
    response.send(spaceNews);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal error occured");
  }
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// Handle React routing, return all requests to React app
app.get("*", (request, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
