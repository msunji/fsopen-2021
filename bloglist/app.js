const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error.message);
  });

app.use(cors());
app.use(express.json());

const blogsRouter = require("./controllers/blogs");
app.use("/api/blogs", blogsRouter);

module.exports = app;
