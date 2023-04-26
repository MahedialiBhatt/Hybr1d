const sellerRepo = require("../repository/sellerRepo");
const buyerRepo = require("../repository/buyerRepo");

async function getListOfSellers() {
  return await sellerRepo.getListOfSellers();
}

async function getCatalogBySellerId(sellerId) {
  return await sellerRepo.getCatalogBySellerId(sellerId);
}

async function createOrder(userId, sellerId, listOfproducts) {
  return await buyerRepo.createOrder(userId, sellerId, listOfproducts);
}

module.exports = { getListOfSellers, getCatalogBySellerId, createOrder };
