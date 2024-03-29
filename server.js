var express = require('express'),
	cookieParser = require('cookie-parser'),
  server = express(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

server.use(cookieParser());
server.use('/', express.static(staticRoot));
server.listen(port);
console.log('http://localhost:'+port);
