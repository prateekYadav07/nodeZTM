const mission = process.argv[2];

mission === "learn"
  ? console.log("Its time to write some node")
  : console.log(`Is ${mission} really fun?`);

// process is a node module which has first and second args as
// node exec path and given file path, from 3rd onwards i.e. 2nd index we can provide our own arguments
process.argv.forEach((val, index) => {
  console.log(`${index} ${val}`);
});
