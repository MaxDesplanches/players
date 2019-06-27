const express = require("express");
const app = express();
const playersRouter = require("./controllers/player")

function launchServer() {
  console.log("launchServer");
  app.use(playersRouter);
  app.listen(8080);
}

module.exports = {
  launchServer
};
