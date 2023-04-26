const sellerRepo = require("../repository/sellerRepo");

async function getOrders(sellerId) {
  return await sellerRepo.getOrders(sellerId);
}

async function createCatalog(name, desc, sellerId, listOfproducts) {
  return await sellerRepo.createCatalog(name, desc, sellerId, listOfproducts);
}

module.exports = { getOrders, createCatalog };
