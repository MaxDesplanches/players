const express = require("express");

let playersRouter = express.Router();

playersRouter.get("/"), (() => {
    console.log('test');
})

module.exports = playersRouter;
  