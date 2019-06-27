const fs = require('fs');

function updateFile(data) {
    return new Promise((resolve, reject) => {
    fs.writeFile("./players.json", data, (err) => {
            err ? reject(new Error(err.message)) : resolve();
        });
    })
}

module.exports = { updateFile };