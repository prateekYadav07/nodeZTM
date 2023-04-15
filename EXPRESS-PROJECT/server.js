const express = require("express");
const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// get all friends
app.get("/friends", friendsController.getFriends);

// add a new friend
app.post("/friends", friendsController.makeFriend);

// get a individual friend
app.get("/friends/:friendId", friendsController.getAFriend);

// get all messages
app.get("/messages", messagesController.getMessages);

app.listen(PORT, () => {
  console.log(`listening on port no ${PORT}`);
});
