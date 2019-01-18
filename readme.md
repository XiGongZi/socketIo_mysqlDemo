socket.io 学习笔记


1.服务器端。
    正常用node搭建服务，具体在 ./3/index.js 下
    1.用io创建服务
    2.io创建连接，当响应连接时的处理内容
    3. socket.on("这里是和页面具体方法连接的暗号",function(data){处理内容});
        socket.broadcast.emit ()    发送其他客户端的广播
        socket.emit()     发送给当前客户端

2.客户端
    demo 见./3/public/index.html
    1. var socket = io.connect('http://127.0.0.1:3000'); 使用此创建连接
    2. socket.emit（） 发送消息
        socket.on()  监听消息