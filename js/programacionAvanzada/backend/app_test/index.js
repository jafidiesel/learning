const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var routes_handler = require('./routes_handler');

var server = http.createServer(routes_handler);
server.listen(port, hostname);
