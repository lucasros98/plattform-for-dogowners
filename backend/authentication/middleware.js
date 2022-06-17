exports.isAuthenticated = ((req, res, next) => {
    url = "/"

    if (!req.isAuthenticated || !req.isAuthenticated()) {
      console.log("auth failed")

      if (req.session) {
        console.log("auth reqired")

        req.session.returnTo = req.originalUrl || req.url;
      }
      return res.send(url);
    }
    console.log("auth")

    next();
  
})