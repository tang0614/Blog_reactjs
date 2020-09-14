const express = require("express");
const cors = require("cors");
const winston = require("winston");
const morgan = require("morgan");
const Contact = require("./mongodb/contact");
const Project = require("./mongodb/project");
const Post = require("./mongodb/post");
const Section = require("./mongodb/section");
require("./db")();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.get("/api", async (req, res) => {
  const data = await Project.find();
  res.status(200).send(data);
});

app.get("/api/posts", async (req, res) => {
  const data = await Post.find();
  res.status(200).send(data);
});

app.get("/api/posts/:_id", async (req, res) => {
  const data = await Post.findById(req.params._id);
  res.status(200).send(data);
});

app.get("/api/sections", async (req, res) => {
  const data = await Section.find();
  res.status(200).send(data);
});

app.get("/api", async (req, res) => {
  const data = await Project.find();
  res.status(200).send(data);
});

app.post("/api/sections", async (req, res) => {
  const section = new Section({
    subTitile: req.body.subTitile,
    content: req.body.content,
    imageSource: req.body.imageSource,
  });

  await section.save();

  res.send(section);
});

app.post("/api/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  await post.save();

  res.send(post);
});

app.post("/api/contact", async (req, res) => {
  const message = new Contact({
    email: req.body.email,
    message: req.body.message,
  });

  await message.save();

  res.send(message);
});

app.put("/api/posts/:_id", async (req, res) => {
  const section = await Section.findById(req.body.sectionId);

  if (!section)
    return res.status(404).send("The genre with the given ID was not valid");

  const updated = await Post.findOneAndUpdate(
    { _id: req.params._id },
    {
      $push: {
        section: {
          _id: section._id,
          subTitle: section.name,
          content: section.content,
          imageSource: section.imageSource,
        },
      },
    },
    { new: true }
  );

  if (!updated)
    return res
      .status(404)
      .send("The Section with the given ID was not provides");

  // return updated Section
  res.send(updated);
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  winston.info(`start listening on port ${port}`);
});

module.exports = server;
