const cookieSession = require("cookie-session");

const handleCookieSessions = cookieSession({
  name: "session",
  keys: [process.env.SESSION_SECRET || "dev-secret-key"],
  maxAge: 24 * 60 * 60 * 1000, // optional but recommended
  httpOnly: true,
});

module.exports = handleCookieSessions;