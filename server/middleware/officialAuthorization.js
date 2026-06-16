const User = require("../db/models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.find(req.session.userId);

    if (!user || !user.is_rep) {
      return res.status(403).json({
        error: "Officials only",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};