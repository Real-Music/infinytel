const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const UserPolicies = require("../policies/userPolicies");
const jwtPolicies = require("../policies/jwtPolicies");

// //User Routes
// Create New User
router.post("/", UserPolicies.createUser, UserController.createUser);

// Login User
router.post("/login", UserController.login);

// Exporting Router
module.exports = router;
