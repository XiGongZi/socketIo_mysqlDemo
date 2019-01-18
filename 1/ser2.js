let http = require('http'); 
let qs = require('querystring');  
var laji  = require('./laji');//连接数据库
// let linkDrawShopUser  = require('./insertUserPass');//连接数据库
let server = http.createServer(function(req, res) {
    let body = '';  // 一定要初始化为"" 不然是undefined
    req.on('data', function(data) {
        body += data; // 所接受的Json数据
        // console.log(typeof(data));
    });
    console.log(1)
    req.on('end', function() { 
        res.writeHead(200, {  // 响应状态
            "Content-Type": "text/plain",  // 响应数据类型
            'Access-Control-Allow-Origin': '*'  // 允许任何一个域名访问
        });
        console.log(2)
        //获取name值
        let a = qs.parse(body).name;
        console.log(a)
        if(a != undefined){
            console.log(JSON.parse(a));
            laji(JSON.parse(a));
        }
        console.log(3)
        
        res.end();
    });   
});

server.listen(3000);