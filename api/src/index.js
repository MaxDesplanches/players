const server = require("./controllers/players");
const file = require("./lib/file");
const lib = require("./lib/https");

const launch = () => {
  lib.httpsGet()
  .then((players) => {
    return file.updateFile(players);
  })
  .then(() => {
    server.launchServer();
  })
  .catch((err) => {
    console.error(err.message);
  });
};

launch();
