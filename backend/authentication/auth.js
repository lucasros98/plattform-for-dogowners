const jwt = require('jsonwebtoken');

function verifyAuth(req, res, next) {

    const token = req.cookies.token;

    if (token == null) {
      //redirct to login
      res.redirect("/login")
    }

    jwt.verify(token, process.env.JWT_TOP_SECRET, (err, user) => {
      console.log(err)
  
      if (err) {
        res.clearCookie("token");
        return res.redirect("/login")
      }
  
      req.user = user
  
      next()
    })
}

module.exports = verifyAuth;