const Joi = require("@hapi/joi");

module.exports = {
  createUser(req, res, next) {
    const schema = Joi.object().keys({
      firstname: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),
      lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      phone: Joi.string().regex(/^[0-9]{9,9}$/),
      gender: Joi.string()
        .min(4)
        .max(6)
        .required()
    });

    // Joi validation
    Joi.validate(req.body, schema, error => {
      if (error) {
        switch (error.details[0].context.key) {
          case "firstname":
            res.status(400).json({
              message: "error",
              response: "",
              error: "Please provide a valid first name"
            });
            break;
          case "lastname":
            res.status(400).json({
              message: "error",
              response: "",
              error: "Please provide a valid last name"
            });
            break;
          case "email":
            res.status(400).json({
              message: "error",
              response: "",
              error: "Please provide a valid email"
            });
            break;
          case "password":
            res.status(400).json({
              message: "error",
              response: "",
              error: "Password must be 8 char long"
            });
            break;
          case "phone":
            res.status(400).json({
              message: "error",
              response: "",
              error: "Phone number must be 9 digit long"
            });
            break;
          case "gender":
            res.status(400).json({
              message: "error",
              response: "",
              error: "Male or Female"
            });
            break;
          default:
            res.status(400).json({
              message: "error",
              response: "",
              error: "Invalid Registration Information"
            });
        }
      } else {
        next();
      }
    });
  }
};
