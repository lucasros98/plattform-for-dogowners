const jwt = require('jsonwebtoken');

function verifyAuth(req, res, next) {

    const token = req.cookies.token;
    console.log(token)

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_TOP_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
}

module.exports = verifyAuth;