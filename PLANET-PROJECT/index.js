const parser = require("csv-parse");
const fs = require("fs");

const result = [];
fs.createReadStream("./cumulative_2023.03.29_12.06.15.csv")
  .pipe(
    parser.parse({
      comment: "#",
      columns: true,
      delimiter: ",",
    })
  )
  .on("data", (data) => {
    result.push(data);
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    console.log(result);
  });
