const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/stores", require("./routes/storeRoutes"));
app.use("/api/ratings", require("./routes/ratingRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

module.exports = app;
