// index.js

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let user = [];

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  console.log('Un utilisateur est connecté');
  const address = socket.handshake.address;
  const pseudo = address.replace(/^.*:/, '');

  user.push(pseudo);

  user = user.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  socket.on('disconnect', function(){
    console.log('Un utilisateur est déconnecté');
  });

  socket.on('chat message', function(msg){
    console.log(pseudo + ' : ' + msg);
    io.emit('chat message', pseudo + ' : ' + msg);
  });
  console.log(user);
});

http.listen(3000, function(){
  console.log('Écoute sur le port 3000');
});