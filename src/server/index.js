const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("dist"));

app.get("/", (req, res) => res.sendFile(path.resolve("dist/index.html")));

let weatherDataBase = {};

app.post("/weather", (request, response) => {
  const data = request.body;
  weatherDataBase = data;
  response.send(weatherDataBase);
});

app.get("/weather", getWeather);

function getWeather(request, response) {
  response.send(weatherDataBase);
}

let port = process.env.PORT || 1922;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = getWeather;
