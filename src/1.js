const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "mini",
};
async function selectuser() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `select * from ss`;

    const list = await connection.queryAsync(sql, [5]);
    // console.log(list);
    await connection.endAsync();
    return list;
};

// async function adduser() {
//     const connection = mysql.createConnection(dbinfo);
//     await connection.connectAsync();
//     let sql = `insert into ss (username,password) values(?,?)`;
//     await connection.queryAsync(sql, [user.username, user.password]);
//     await connection.endAsync();
// };


// async function checkConnection() {
//     const connection = mysql.createConnection(dbinfo);
//     await connection.connectAsync();
//     console.log("Done!");

//     await connection.endAsync();
// };

// const user = { username: "sachin", password: "srjadhav" };
// const user = { username: "anita", password: "rjadhav" };
// const user = { username: "rajhans", password: "sjadhav" };
// const user = { username: "vaishnavi", password: "jadhav" };
// const user = { username: "vikas", password: "srj" };
// checkConnection();


// adduser(user);
selectuser();
module.exports = { selectuser };
