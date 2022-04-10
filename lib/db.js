var mysql = require('mysql')

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'LJH1234',
    database : 'opentutorials_nodejs'
  });
  db.connect();

  // API 하나인경우
  module.exports =db;
