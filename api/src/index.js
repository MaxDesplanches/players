const server = require('./server');
const lib = require('./lib/https');

const launch = () => {
  lib.httpsGet()
  .then((players) => {
    console.log(players);
    server.launchServer();
  })
  .catch((err) => {
    console.error(err.message);
  })
};

launch();
