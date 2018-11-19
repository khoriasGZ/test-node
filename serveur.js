var http = require('http');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
})

jeu.emit('gameover', 'Vous avez perdu !');

server.listen(8080); // Démarre le serveur

