const express = require("express");
const router = express.Router();
const authRoutes = require("../routes/auth");
const buyerRoutes = require("../routes/buyer");
const sellerRoutes = require("../routes/seller");

router.use(authRoutes, buyerRoutes, sellerRoutes);

module.exports = router;
