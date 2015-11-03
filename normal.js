var contentDisposition = require('content-disposition');
var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

// Serve up files folder
var serve = serveStatic('files', {
  'index': false,
  'setHeaders': setHeaders
});

// Set header to force download
function setHeaders(res, path) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);
}

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res);
  serve(req, res, done);
});

// Listen
server.listen(3000);