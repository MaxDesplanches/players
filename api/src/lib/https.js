const https = require("https");

function httpsGet() {
    return new Promise((resolve, reject) => {
        https.get('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json', (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];
          
            let error;
            if (statusCode !== 200) {
              reject(new Error('Request Failed.\n' +
                                `Status Code: ${statusCode}`));
            } else if (!/^application\/json/.test(contentType)) {
                reject(new Error('Invalid content-type.\n' +
                                `Expected application/json but received ${contentType}`));
            }
            if (error) {
              reject(new Error(error.message));
              res.resume();
              return;
            }
          
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                resolve(rawData);
            });
          }).on('error', (e) => {
            reject( new Error(`Got error: ${e.message}`));
          });
    })
}

module.exports = {
    httpsGet
  };