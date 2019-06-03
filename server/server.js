var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000, () => console.log('server is listening on 8000'));
app.use(express.static('public'));

// app.get('/', function (req, res) {
//   //res.status(200).send('Ok');
//     res.sendFile('index.html', {'root':'./'});
// });

app.get('/js', function(req, res){
    res.sendFile('index.js', {'root':'./'});
});

io.on('connect', function (socket) {
    console.log('test');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
