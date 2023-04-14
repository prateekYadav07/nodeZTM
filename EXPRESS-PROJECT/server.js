const express = require("express");
const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Sir Issac Newton",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}`);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/friends", (req, res) => {
  setTimeout(() => {
    res.json(friends);
  }, 3000);
});

// route parameters
app.get("/friends/:friendId", (req, res) => {
  const id = req.params.friendId;
  if (Number(id) !== 0 && !Boolean(Number(id)))
    res.status(404).send({ error: `Illegal argument: ${req.params.friendId}` });
  if (!friends[id]) res.status(404).json({ error: "Friend doesn't exist" });
  res.json(friends[id]);
});

app.get("/messages", (req, res) => {
  console.log("loading messages");
});

app.listen(PORT, () => {
  console.log(`listening on port no ${PORT}`);
});
