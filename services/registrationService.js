const Registration = require('../models/registrationModel');



exports.Registration = async (req, res) => {
    try {
      const RegistrationData = new Registration(req.body);
      await RegistrationData.save();
      res.status(200).json(RegistrationData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };