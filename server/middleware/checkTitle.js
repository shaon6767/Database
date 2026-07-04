function checkTitle(req, res, next) {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  next();
}

module.exports = checkTitle;