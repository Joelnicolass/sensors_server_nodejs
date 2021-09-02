const mysql = require("mysql");
const util = require("util");
const settings = require("./settings.json");

//Conexión a la DB
const conn = mysql.createConnection(settings);

conn.connect((error) => {
  if (error) throw error;
  console.log("status conn: ok");
});

const qy = util.promisify(conn.query).bind(conn);

module.exports = qy;
