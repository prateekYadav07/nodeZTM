function getMessages(req, res) {
  res.json({msg : 'ALl the messages are loaded'})
}

module.exports = {
  getMessages,
};
