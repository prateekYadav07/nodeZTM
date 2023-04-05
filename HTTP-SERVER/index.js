const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/batman") {
    // res.writeHead(200, "Request is succesful with 200", {
    //   // "Content-Type": "text/plain",
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        name: "Bruce",
        company: "Wayne Corp",
        occupation: "night vigilante",
      })
    );
  }else if(req.url === '/messages'){
    res.setHeader('Content-Type', 'text/plain')
    res.write('messages chunk')
    res.end()
  }else{
    res.statusCode = 404
    res.end()
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
