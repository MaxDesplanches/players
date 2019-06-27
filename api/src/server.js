const express = require("express");
const app = express();
const playersRouter = require("./controllers/player");

function launchServer() {
  console.info("launchServer on port 8080 ...");
  app.use("/player", playersRouter);
  app.listen(8080);
  console.info("I'm listening ! localhost:8080");
}

module.exports = { launchServer };
