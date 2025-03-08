const Registration = require("../models/registrationModel");
const { JWT } = require("../utilities/jwt");

const registrationService = {
    login:(username,password,res)=>{
        if(username && password){
            Registration.findOne({email : username,password:password })
            .then((response)=>{
                if(response){
                    let token = JWT.createToken(response)
                    res.status(200).send(token)
                } else {
                    res.status(500).send("Invalid username or password")
                }
            })
        } else {

        }
    },
  create: async (req,res) => {
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

module.exports ={registrationService}
