const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/messages", (req, res) => {
  res.send("<p><em>Bruce Wayne</em></p>");
});

app.get("/messages", (req, res) => {
  console.log("loading messages");
});

app.listen(PORT, () => {
  console.log(`listening on port no ${PORT}`);
});
