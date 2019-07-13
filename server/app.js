const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

//Routes
const userRoutes = require("./api/routes/userRoutes");

// Initialize App
const app = express();

// Middleware
app.use(morgan("combined")); // log who hits our broswer on the console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Static Folder for Images Only
app.use(express.static("./public"));

// Handle Cors Error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST,PATCH,DELETE,GET");
    res.status(200).json({});
  }
  next();
});

// All My Routes Goes Here
app.use("/user", userRoutes);

// 404 Errors Page Not Found
app.use(function(req, res) {
  return res
    .status(404)
    .json({ message: "404 Route " + req.url + " Page Not Found" });
});

// 500 Errors Any Server Error
app.use(function(err, req, res) {
  return res.status(500).json({ error: err });
});

module.exports = app;
