const http = require("http");

const PORT = 3000;

const supes = [
  {
    id: 0,
    name: "Bruce",
  },
  {
    id: 1,
    name: "Diana",
  },
  {
    id: 2,
    name: "Clark",
  },
];

const server = http.createServer((req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "supes") {
    req.on("data", (data) => {
      const supe = data.toString();
      const supeObj = JSON.parse(supe);
      supeObj["id"] = supes.length + 1;
      supes.push(supeObj);
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "supes") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      res.end(JSON.stringify(supes[+items[2]]));
    } else {
      res.end(JSON.stringify(supes));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/plain");
    res.write("messages chunk");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
