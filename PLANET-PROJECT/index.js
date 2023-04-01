const parser = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    0.36 < planet["koi_insol"] &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("./cumulative_2023.03.29_12.06.15.csv")
  .pipe(
    parser.parse({
      comment: "#",
      columns: true,
      delimiter: ",",
    })
  )
  .on("data", (data) => {
    if (isHabitable(data)) habitablePlanets.push(data);
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name']
    }));
    console.log(`${habitablePlanets.length} habitable planets found`);
  });
