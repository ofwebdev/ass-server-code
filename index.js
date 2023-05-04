const express = require("express");
const cors = require("cors");
const category = require("./data/category.json");
const data = require("./data/data.json");
const blog = require("./data/blog.json");

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

app.get("/country/:id", (req, res) => {
  const id = req.params.id;

  const findCategoryById = data.filter((getData) => getData.category_id === id);

  if (id == 0) {
    res.send(data);
  } else {
    if (findCategoryById.length == 0) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID parameter",
      });
    }
  }

  res.send(findCategoryById);
});

app.get("/recipe", (req, res) => {
  res.send(data);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;

  const findRecipeById = data.find((recipe) => recipe._id === id);
  if (!findRecipeById) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID parameter",
    });
  }

  res.send(findRecipeById);
});

app.get("/blog", (req, res) => {
  res.send(blog);
});

app.get("/blog/:id", (req, res) => {
  try {
    const id = req.params.id;

    const findBlogById = blog.find((blogId) => blogId.id === parseInt(id));
    if (!findBlogById) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID parameter",
      });
    }

    res.send(findBlogById);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
