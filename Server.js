const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/connect");
const mysql = require("mysql");

require("dotenv").config();

//create instance of Express
const app = express();

const Port = process.env.Port || 8000;

//connect to Server //
app.listen(Port, (err) => {
  err
    ? console.log("cannot connect to Server")
    : console.log("Server is running on port : " + Port);
});

app.use(express.json());

app.use("/api/users", require("./routes/users"));
app.use("/api/admin", require("./routes/admin"));

connectDb();
// try {
//   var connection = mysql.createConnection({
//     host: "85.214.20.32",
//     user: "tongah",
//     password: "lindaa4312?",
//   });
// } catch (error) {
//   console.log(error);
// }

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
//   if (err) throw err;
//   console.log("The solution is: ", rows[0].solution);
// });

// connection.end();

// http
//   .createServer((request, response) => {
//     response.write("jeet");
//     response.end();
//   })
//   .listen(5000, (err) =>
//     err ? console.log("sth happened") : console.log("here we go")
//   );
