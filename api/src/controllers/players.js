const express = require("express");
const app = express();
const file = require("../lib/file");

function launchServer() {
    app.get("/players", (req, res) => {
        file.getFile().then((data) => {
            const sortById = data["players"].sort((a, b) => { return (a.id - b.id); });
            res.send(sortById);
        })
        .catch((err) => {
            res.send({status: 500, error: err.message});
        })
    })

    app.get("/players/:id", (req, res) => {
        file.getFile().then((data) => {
            const id = parseInt(req.params.id, 10);
            const playerId = data["players"].find((element) => { return element["id"] === id; });
            res.send(playerId);
        })
        .catch((err) => {
            res.send({status: 500, error: err.message});
        })
    })

    app.listen(8080);

    console.info("listening on 8080");
}
module.exports = { launchServer };
