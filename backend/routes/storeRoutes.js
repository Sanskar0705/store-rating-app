const express = require("express");
const { getAllStores } = require("../controllers/storeController");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", verifyToken, getAllStores);

module.exports = router;
