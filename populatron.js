const fs = require("fs");

module.exports = {
  totalPopulation(onFinished) {
    let store = [];
    const data = fs
      .readFileSync("cities.csv", "utf-8")
      .split(",")
      .slice(8);
    for (let i = 0; i < data.length; i++) {
      if (i % 6 === 0) {
        store.push(Number(data[i]));
      }
    }
    onFinished(store.reduce((acc, cur) => (acc += cur)));
  },
};
