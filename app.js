// Import necessary modules
const express = require("express");
const methodOverride = require("method-override");
const db = require("./db");

// Initialize the app
const app = express();

//const reference for the backend port for ease of reference
const backendPort = 3000;

// Needed to parse JSON payloads
app.use(express.json());
//needed to parse url-encoded data in url and body
app.use(express.urlencoded({ extended: true }));
//for overriding the post from html forms to delete or update
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

// Set the view engine to ejs
app.set("view engine", "ejs");

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

// Import routes
const routes = require("./routes/index");
app.use("/", routes);

// Start the server
app.listen(backendPort, () => {
  console.log(`Server is running on port ${backendPort}`);
});
