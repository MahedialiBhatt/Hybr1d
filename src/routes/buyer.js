const express = require("express");
const router = express.Router();
const { verifyToken, isBuyer } = require("../middleware/auth");

const buyerController = require("../controller/buyerController");

router.get("/buyer/list-of-sellers/", verifyToken, async (req, res) => {
  return await buyerController.getListOfSellers(req, res);
});

router.get(
  "/buyer/seller-catalog/:seller_id",
  verifyToken,
  async (req, res) => {
    return await buyerController.getCatalogBySellerId(req, res);
  }
);

router.post(
  "/buyer/create-order/:seller_id",
  verifyToken,
  isBuyer,
  async (req, res) => {
    return await buyerController.createOrder(req, res);
  }
);

module.exports = router;
