var mysql  = require('mysql'); 

let mysqlLinkUserPass = function (json_a){

var connection = mysql.createConnection({     
host     : 'localhost',       
user     : 'root',              
password : '123456',       
port: '3306',                   
database: 'drawshop', 
}); 

connection.connect();

let json = json_a;

    var  addSql = 'INSERT INTO userpass(Id,phoneNum,password) VALUES(0,?,?)';
    var  addSqlParams = [json.phoneNum,json.password];
    //增
    connection.query(addSql,addSqlParams,function (err, result) {
            if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
            }   
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:',result);        
            console.log('-----------------------------------------------------------------\n\n');  
        });


connection.end();
}

module.exports = mysqlLinkUserPass;
