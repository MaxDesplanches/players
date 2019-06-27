const express = require("express");
const app = express();
const file = require("../lib/file");

function launchServer() {
    app.use("/players", (req, res) => {
        file.getFile().then((data) => {
            let fileContent;
            try {
                fileContent = JSON.parse(data);
            }
            catch (error) {
                throw error;
            }
            const sortById = fileContent["players"].sort((a, b) => { return (a.id - b.id); });
            res.send(sortById);
        })
        .catch((err) => {
            res.send({status: 500, error: err.message});
        })
    })

    app.listen(8080);

    console.info("listening on 8080");
}
module.exports = { launchServer };
