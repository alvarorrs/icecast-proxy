const request = require('request');

export default (req, res) => {
  // Redirige el stream HTTP a través de un proxy HTTPS
  request('http://ns100.emisionlocal.com:9428/live').pipe(res);
};
