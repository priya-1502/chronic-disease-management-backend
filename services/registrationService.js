const Registration = require("../models/registrationModel");
const { JWT } = require("../utilities/jwt");

const registrationService = {
  login: (req) => {
    return new Promise((resolve, reject) => {
      var { username, password } = req.body;
      if (username && password) {
        Registration.findOne(
          { email: username, password: password },
          { firstName: 1, lastName: 1, email: 1, role: 1 }
        ).then((response) => {
          if (response) {
            let token = JWT.createToken(response);
            resolve({ token, response });
          } else {
            reject("Invalid username or password");
          }
        });
      } else {
        reject("Username / Password is required");
      }
    });
  },
  create: async (bodyData) => {
    return new Promise((resolve, reject) => {
      Registration.create(bodyData)
        .then((response) => {
          resolve("User created successfully");
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  fetch: (id) => {
    return new Promise((resolve, reject) => {
      Registration.findById({ _id: id }).then((response) => {
        if (response) {
          resolve(response);
        } else {
          reject("user not found");
        }
      });
    });
  },
};

module.exports = { registrationService };
