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
            res.status(500).send({status: 500, error: err.message});
        })
    })

    app.get("/players/:id", (req, res) => {
        file.getFile().then((data) => {
            const id = parseInt(req.params.id, 10);
            const playerId = data["players"].find((element) => { return element["id"] === id; });
            if (playerId) {
                res.send(playerId);
            } else {
                res.status(404).send({status: 404, error: "Player not found"});
            }
        })
        .catch((err) => {
            res.status(500).send({status: 500, error: err.message});
        })
    })

    app.delete("/players/:id", (req, res) => {
        file.getFile().then((data) => {
            const id = parseInt(req.params.id, 10);
            const filtered = data["players"].filter((element) => { return element["id"] !== id; });
            return file.updateFile(JSON.stringify({players: filtered}));
        })
        .then(() => {
            res.status(204).send();
        })
        .catch((err) => {
            res.status(500).send({status: 500, error: err.message});
        })
    })

    app.listen(8080);

    console.info("listening on 8080");
}
module.exports = { launchServer };
