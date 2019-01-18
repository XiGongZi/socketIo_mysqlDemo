var mysql  = require('mysql'); 

let mysqlLinkSea = function (a){

var connection = mysql.createConnection({     
host     : 'localhost',       
user     : 'root',              
password : '123456',       
port: '3306',                   
database: 'banner', 
}); 

connection.connect();

connection.query('SELECT * from index2 where mainColor="'+a+'"', function(err, result) {
    if (err) throw err;
    console.log(result);
    return result;
})

connection.end();
}
module.exports = mysqlLinkSea;
