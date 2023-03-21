// https is a separate module for secure transmission
// const http = require("http");

// other way of doing this is ES object import
const { get} = require('http')


const req = get("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk is ${chunk}`);
  });

  res.on("end", () => {
    console.log("no more data");
  });
});

// we have to always call the end function which would trigger the data sent event
// but when we directly  use get we don't need to call end function
// req.end();

