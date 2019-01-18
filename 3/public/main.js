// file: main.js

var socket = io.connect('http://127.0.0.1:3000');
// $("button").click(function(){

//     // 接收`new message`广播
//     socket.on('new message', function (data) {
//         console.log()
//     });

//     // 发送消息的函数
//     function sendMessage (str) {
//         socket.emit('new message', str);
//     }
// });
//get
$("#btn3").click(function() {
    var data = $("#charts").serialize();
    params = decodeURIComponent(data ,true);
    var strdata = $("#charts").serializeArray();
    console.log(strdata)
    var zhi = {};
    $.each(strdata,function(i,n){
        zhi[n.name] = n.value;
    });
    console.log(zhi)
    socket.emit('addUserInfo', JSON.stringify(zhi));

});
socket.on('search AddReturn', function(data){
    console.log(data);
    console.log(1)
});



//send
$("#btn2").click(function() {
        var a = [
                    {
                        "add":"./static/image/banner_1.jpg",		
                        "mainColor":"#C6BD3a"
                    }
                ];
    socket.emit('add newBG', a);
});

