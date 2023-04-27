const sellerService = require("../service/sellerService");
const buyerService = require("../service/buyerService");
const {
  getLoggedInUserId,
  invoker,
  writeResponse,
} = require("../utils/utility");

async function getOrders(req, res) {
  const sellerId = getLoggedInUserId(req) || 1;

  const [response, err] = await invoker(sellerService.getOrders(sellerId));

  if (err) {
    return writeResponse(
      { code: 500, message: "Something went wrong while fetching orders." },
      null,
      res
    );
  }

  return writeResponse(null, response, res);
}

async function createCatalog(req, res) {
  const sellerId = getLoggedInUserId(req) || 1;
  const { name, desc, items } = req.body;

  if (!name || !desc || !items || items.length == 0) {
    return writeResponse({ code: 400, message: "Bad Request" }, null, res);
  }

  const [isCatalogExist, err0] = await invoker(
    buyerService.getCatalogBySellerId(sellerId)
  );

  if (err0) {
    return writeResponse({ code: 400, message: "Bad Request" }, null, res);
  }

  if (isCatalogExist) {
    return writeResponse(
      {
        code: 409,
        message: "Catalog already exist... Seller can have only one Catalag",
      },
      null,
      res
    );
  }

  const [response, err] = await invoker(
    sellerService.createCatalog(name, desc, sellerId, items)
  );

  if (err) {
    return writeResponse(
      { code: 500, message: "Something went wrong while creating catalog." },
      null,
      res
    );
  }

  return writeResponse(null, response, res);
}

module.exports = { getOrders, createCatalog };
