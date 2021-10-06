import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "agenda-petshop",
});

export default connection;
