/**
 * 1. Node modules are separate js files which have different
 *  functionalities and can be imported using require (commonJS)
 *  or import statements (ESM)
 * 
 * 2. node modules are cached that means they are stored in require.cache 
 * object and are loaded once.
 * 
 * 3. imported module methods cannot be overwritten
 */

// this is commonJS module importing
// const { send } = require("./request");
// const { read } = require("./response");

// this is ESM module imports
// import { send } from "./Modules/request.js";
// import { read } from "./Modules/response.js";

const modules = require('./Modules')

function request(url, data) {
  modules.request.send(url, data);
  return modules.response.read();
}

console.log(request("url", "data"));
