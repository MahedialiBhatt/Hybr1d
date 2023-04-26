const express = require("express");
const router = express.Router();
const { verifyToken, isSeller } = require("../middleware/auth");

const sellerController = require("../controller/sellerController");

router.get("/seller/orders/", verifyToken, isSeller, async (req, res) => {
  return await sellerController.getOrders(req, res);
});

router.post(
  "/seller/create-catalog/",
  verifyToken,
  isSeller,
  async (req, res) => {
    return await sellerController.createCatalog(req, res);
  }
);

module.exports = router;
