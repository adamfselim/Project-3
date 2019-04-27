const router = require("express").Router();
const eventRoutes = require("./events");
const signinRoutes = require("./signin");

// Event routes
router.use("/events", eventRoutes);
router.use("/users", signinRoutes);

module.exports = router;
