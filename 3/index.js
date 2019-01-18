// file: index.js
var express = require('express');
var app = express();
let $ = require('querystring'); 
var laji  = require('./ser/laji');//连接数据库 增
var personal_intro  = require('./ser/personal_intro');//连接数据库 增
let linkDrawShopUser  = require('./ser/getReInfo');//连接数据库 查

app.use(express.static(__dirname + '/public'));

var server = require('http').createServer(app);
server.listen(3000, function () {
  console.log('Server listening at port %d', 3000);
});


var io = require('socket.io')(server);

io.on('connection', function (socket) {
  // 请求名称叫 add user
  socket.on('add user', function (username) {
    socket.username = username;
  });
  // 请求名称叫 new message
  socket.on('add newBG', function (data) {
    // 发送给客户端的广播也叫 new message
    // socket.broadcast.emit('new message', {
    //   username: socket.username,
    //   message: data
    // });
    // console.log(typeof(data))
    laji(data);
  });
  socket.on('search Add', function (data) {
    // 发送给客户端的广播也叫 new message
    // socket.broadcast.emit('new message', {
    //   username: socket.username,
    //   message: data
    // });
    console.log(typeof(data))
    let json01 = {};
    json01.data = data;
    json01.fun = function (data){
      console.log(data)
      socket.emit('search AddReturn', data);
    }
    linkDrawShopUser(json01);
  });

  socket.on('addUserInfo', function (data) {
    let a = JSON.parse(data);
    console.log(typeof(a))
    personal_intro(a);
  });

});
