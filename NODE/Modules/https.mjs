// this is commonJS module importing
// const { send } = require("./request");
// const { read } = require("./response");

// this is ESM module imports
import {send} from './request.mjs'
import {read} from './response.mjs'

function request(url, data) {
  send(url, data);
  return read();
}

console.log(request("url", "data"));
