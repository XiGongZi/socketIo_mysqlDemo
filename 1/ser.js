let http = require('http'); 
let qs = require('querystring');  
var laji  = require('./laji');//连接数据库
// var qqBotMysql  = require('./qqBotMysql');//连接数据库
let linkDrawShopUser  = require('./getReInfo');//连接数据库
let server = http.createServer(function(req, res) {


    let body = '';  // 一定要初始化为"" 不然是undefined
    req.on('data', function(data) {
        body += data; // 所接受的Json数据
        // console.log(typeof(data));
    });


    req.on('end', function() { 
        res.writeHead(200, {  // 响应状态
            "Content-Type": "text/plain",  // 响应数据类型
            'Access-Control-Allow-Origin': '*'  // 允许任何一个域名访问
        });
        //获取name值
        let a = qs.parse(body).name;
        // let qqbot = qs.parse(body).qqbotMsg;
        // console.log(qqbot)
        if(a != undefined){
            laji(JSON.parse(a));
        }

        let bbb = qs.parse(body).get;
        // let qqbot = qs.parse(body).qqbotMsg;
        console.log(bbb);
        var getInfo_01 ; 
        if(bbb != undefined){
            getInfo_01 = linkDrawShopUser(JSON.parse(bbb));
        }
   
        res.end();
    });  
    
    









});

server.listen(3000);