var mysql = require('mysql')

var db = mysql.createConnection({
    host     : '아이피',
    user     : '아이디',
    password : '패스워드',
    database : '데이터 입력'
  });
  db.connect();

  // API 하나인경우
  module.exports =db;
