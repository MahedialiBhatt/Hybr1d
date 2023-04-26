const { mySqlConnectionPool } = require("../configs/db.config");

async function getListOfSellers() {
  const sql = `SELECT id as userId, username, type FROM users WHERE type = 'seller';`;
  const [rows] = await mySqlConnectionPool.execute(sql);
  return rows;
}

async function getCatalogBySellerId(sellerId) {
  const sql = `SELECT
    cp.product_id,
    p.name,
    p.price
  FROM
    catalogs c
  JOIN catalog_products cp ON cp.catalog_id = c.id
  JOIN products p ON cp.product_id = p.id
  WHERE
    seller_id = ?;
    `;
  const [rows] = await mySqlConnectionPool.execute(sql, [sellerId]);
  return rows;
}

async function getOrders(sellerId) {
  const sql = `SELECT oi.order_id, count(oi.product_id) num_products_ordered, json_arrayagg(json_object('product_id',oi.product_id,'product_name',p.name, 'quantity',oi.quantity)) as products_data FROM orders o
  JOIN order_items oi ON  oi.order_id = o.id
  JOIN products p ON p.id = oi.product_id
  WHERE seller_id = ?
  GROUP By oi.order_id
  ;`;

  const [rows] = await mySqlConnectionPool.execute(sql, [sellerId]);
  return rows;
}

async function createCatalog(
  catalogName,
  catalogDesc,
  sellerId,
  listOfproducts
) {
  let connection;
  const sql = `INSERT INTO catalogs(seller_id,name,description) VALUES(?,?,?) 
  ON DUPLICATE KEY UPDATE seller_id=values(seller_id),name=values(name),description=values(description)`;
  try {
    connection = await mySqlConnectionPool.getConnection();
    await connection.beginTransaction();

    const catalog = await connection.execute(sql, [
      sellerId,
      catalogName || "Catalog",
      catalogDesc || "Catalog",
    ]);

    let catalogId = catalog[0].insertId;

    if (!catalogId) {
      catalogId = (
        await connection.execute(
          `SELECT id FROM catalogs WHERE seller_id = ${sellerId}`
        )
      )[0][0].id;
    }

    let insertProducts = listOfproducts.map((product) => {
      return `( "${catalogId}", "${product}")`;
    });

    const sql2 = `INSERT INTO catalog_products(catalog_id, product_id) VALUES ${insertProducts.join(
      ", "
    )} ON DUPLICATE KEY UPDATE catalog_id=values(catalog_id),product_id=values(product_id);`;

    await connection.query(sql2);
    await connection.commit();
  } catch (e) {
    await connection.rollback();
    throw e;
  } finally {
    await connection.release();
  }
  return true;
}

module.exports = {
  getListOfSellers,
  getCatalogBySellerId,
  getOrders,
  createCatalog,
};
