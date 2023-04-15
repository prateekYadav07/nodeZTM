const friends = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friends);
}

function makeFriend(req, res) {
  if (!req.body.name) return res.status(400).json({ error: "Bad request" });
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
}

function getAFriend(req, res) {
  const id = req.params.friendId;
  if (Number(id) !== 0 && !Boolean(Number(id)))
    res.status(404).send({ error: `Illegal argument: ${req.params.friendId}` });
  if (!friends[id]) res.status(404).json({ error: "Friend doesn't exist" });
  res.json(friends[id]);
}

module.exports = {
  getFriends,
  getAFriend,
  makeFriend,
};
