const buyerService = require("../service/buyerService");
const {
  getLoggedInUserId,
  invoker,
  writeResponse,
} = require("../utils/utility");

async function getListOfSellers(req, res) {
  const [response, err] = await invoker(buyerService.getListOfSellers());

  if (err) {
    return writeResponse(
      {
        code: 500,
        message: "Something went wrong while fetching list of sellers.",
      },
      null,
      res
    );
  }
  return writeResponse(null, response, res);
}

async function getCatalogBySellerId(req, res) {
  const sellerId = req.params.seller_id;

  if (!sellerId || sellerId <= 0) {
    return writeResponse({ code: 400, message: "Bad Request" }, null, res);
  }

  const [response, err] = await invoker(
    buyerService.getCatalogBySellerId(sellerId)
  );

  if (err) {
    return writeResponse(
      { code: 500, message: "Something went wrong while fetching catalog." },
      null,
      res
    );
  }
  return writeResponse(null, response, res);
}

async function createOrder(req, res) {
  const userId = getLoggedInUserId(req) || 8;
  const sellerId = req.params.seller_id;
  const listOfItems = req.body.items;

  if (!sellerId || sellerId <= 0 || !listOfItems || listOfItems.length == 0) {
    return writeResponse({ code: 400, message: "Bad Request" }, null, res);
  }

  const [response, err] = await invoker(
    buyerService.createOrder(userId, sellerId, listOfItems)
  );

  if (err) {
    return writeResponse(
      { code: 500, message: "Something went wrong while creating order." },
      null,
      res
    );
  }

  return writeResponse(null, response, res);
}

module.exports = { getListOfSellers, getCatalogBySellerId, createOrder };
