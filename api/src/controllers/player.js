const express = require("express");
const lib = require("../lib/https");

let playersRouter = express.Router();

playersRouter.get("/player"), (() => {
    lib.httpsGet()
    .then((players) => {
      console.log(players);
    })
    .catch((err) => {
      console.error(err.message);
    })
})

module.exports = playersRouter;
  