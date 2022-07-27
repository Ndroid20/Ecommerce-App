const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "database-1.cwwwnkswqwdl.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "password",
  database: "ecommerce",
});

db.connect((err) => {
  if (err) {
    console.log(err.mensage);
    return;
  }
  console.log("Database connected");
});

app.get("/", (req, res) => {});

app.listen(process.env.PORT || 5000, () => {
  console.log("running on port");
});
