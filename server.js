const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "mhodges",
    // Your MySQL password
    password: "mjh1",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found) this always needs to be the LAST route.
app.use((req, res) => {
  res.status(404).end();
});

// the app.listen will always go at the bottom!!!!
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});