const secureMiddleWare = (req, res, next) => {
    let password = "ehquksdfr37984";
    let pass = req.headers.authorization;
    if (password === pass) {
      next();
    } else {
      res.send("unauthorized");
    }
  }

  module.exports = secureMiddleWare