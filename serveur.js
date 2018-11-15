var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
server.listen(8080);

/**
   HTML sur le serveur node.js
  
 res.write('<!DOCTYPE html>'+
 '<html>'+
 '    <head>'+
 '        <meta charset="utf-8" />'+
 '        <title>Ma page Node.js !</title>'+
 '   </head>'+
 '   <body>'+
 '       <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
 '   </body>'+
 '</html>');
*/
