const mysql = require("mysql2");
const dbc = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "miniweb",
};
const connection = mysql.createConnection(dbc);
connection.connect();
console.log("CONNECTION SUCCESS!!!!");
connection.end();
