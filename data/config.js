const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "test"
  });

module.exports = conexion;
