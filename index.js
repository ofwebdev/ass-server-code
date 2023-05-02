const express = require("express");
const cors = require("cors");
const category = require("./data/category.json");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.get("/country", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
