// Node Dependency
var mysql = require('mysql');
require("dotenv").config();
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : process.env.my_host,
    port     : process.env.my_port,
    user     : process.env.my_user,
    password : process.env.my_password, 
    database : process.env.my_database 
  });
}

// Export the Connection
module.exports = connection;