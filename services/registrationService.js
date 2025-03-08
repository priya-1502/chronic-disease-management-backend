const Registration = require("../models/registrationModel");

const registrationService = {
  create: async () => {
    try {
      const RegistrationData = new Registration(req.body);
      await RegistrationData.save();
      res.status(200).json(RegistrationData);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
};

module.exports =registrationService
