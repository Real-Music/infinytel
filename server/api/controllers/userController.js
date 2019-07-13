const { User } = require("../models");
const Op = require("sequelize").Op;
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// jwt for generating token
function jwtSignUser(user) {
  const ONE_WEEK = config.jwt.ONE_WEEK;
  return jwt.sign(user, config.jwt.JWT_SECRET, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  // Create New User
  async createUser(req, res) {
    try {
      // check if user exist
      const checkUser = await User.findOne({
        where: {
          [Op.or]: [{ email: req.body.email }, { phone: req.body.phone }]
        }
      });

      if (checkUser)
        return res.status(400).json({
          message: "error",
          response: "",
          error: "User already exist!"
        });

      //create new user if check was false
      User.create(req.body)
        .then(response => {
          res.status(200).json({
            message: "success",
            response: {
              data: response,
              token: jwtSignUser({
                email: response.toJSON().email,
                password: response.toJSON().password
              })
            }
          });
        })
        .catch(error => {
          // Sequelize Errors
          console.log("Sequelize Errors", error);
        });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error",
        response: "",
        error: error
      });
    }
  },

  // User logging in
  async login(req, res) {
    try {
      const { email, password } = req.body;
      // Querying db to see if user exist.
      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        // if not found
        return res.status(400).json({
          message: "error",
          response: "",
          error: "The login information was incomplete!"
        });
      }

      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        // is password doesn't match
        return res.status(400).json({
          message: "error",
          response: "",
          error: "The login information was incomplete!"
        });
      }

      // success
      res.status(200).json({
        message: "success",
        response: { data: user, token: jwtSignUser(user.toJSON()) }
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Error",
        response: "",
        error: error
      });
    }
  }
};
