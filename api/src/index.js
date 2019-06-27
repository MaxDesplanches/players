const server = require("./controllers/players");
const file = require("./lib/file");
const lib = require("./lib/https");

const launch = () => {
  return new Promise((resolve, reject) => {
    lib.httpsGet()
    .then((players) => {
      return file.updateFile(players);
    })
    .then(() => {
      return server.launchServer();
    })
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
  })
};

launch().catch((err) => console.error(err.message));

module.exports = launch;
