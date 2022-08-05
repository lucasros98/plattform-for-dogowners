const jwt = require('jsonwebtoken');

function verifyAuth(req, res, next) {

    const token = req.cookies.token;

    console.log(token)
    if (token == null) {
      //redirct to login
      return res.send({success:false,message:"No token"})
    }
    else {
      jwt.verify(token, process.env.JWT_TOP_SECRET, (err, user) => {
  
        if (err) {
          res.clearCookie("token");
          return res.redirect("/logout")
        }
    
        req.user = user
    
        next()
      })
    }
}

module.exports = verifyAuth;