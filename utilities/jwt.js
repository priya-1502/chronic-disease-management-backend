const jwt = require("jsonwebtoken");

 class JWT{
    static createToken(userPayload){
        return jwt.sign(userPayload,process.env.SECRET_KEY,{expiresIn:'10h'})
    }
    static async authorize(token){
       const result = jwt.verify(token,process.env.SECRET_KEY)
       if(result){
        return true
       }
       return false
    }
}

module.exports = {JWT}