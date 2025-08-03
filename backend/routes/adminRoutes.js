const express = require("express");
const { addUser, addStore, dashboard } = require("../controllers/adminController");
const verifyToken = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");
const router = express.Router();

router.post("/add-user", verifyToken, authorize("admin"), addUser);
router.post("/add-store", verifyToken, authorize("admin"), addStore);
router.get("/dashboard", verifyToken, authorize("admin"), dashboard);

module.exports = router;
