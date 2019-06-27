const fs = require('fs');

function updateFile(data) {
    return new Promise((resolve, reject) => {
    fs.writeFile("./players.json", data, (err) => {
            err ? reject(new Error(err.message)) : resolve();
        });
    })
}

function getFile() {
    return new Promise((resolve, reject) => {
    fs.readFile("./players.json", (err, data) => {
            err ? reject(new Error(err.message)) : resolve(JSON.parse(data.toString()));
        });
    })
}

module.exports = { updateFile, getFile };