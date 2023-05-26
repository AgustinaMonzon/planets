const axios = require("axios");
const planets = require("./planets.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Planten");
    return results.data;
  },
  create: async () => {
    throw Error("Hay un error al momento de crear un planeta");
  },
};
