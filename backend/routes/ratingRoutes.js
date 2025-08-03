const express = require("express");
const { submitRating, getRatingsByOwner } = require("../controllers/ratingController");
const verifyToken = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");
const router = express.Router();

router.post("/", verifyToken, authorize("normal"), submitRating);
router.get("/owner", verifyToken, authorize("store_owner"), getRatingsByOwner);

module.exports = router;
