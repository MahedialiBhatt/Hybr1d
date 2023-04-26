const { mySqlConnectionPool } = require("../configs/db.config");

async function createOrder(userId, sellerId, listOfproducts) {
  let connection;
  const sql = `INSERT INTO orders(buyer_id,seller_id) VALUES(?,?)`;
  try {
    connection = await mySqlConnectionPool.getConnection();
    await connection.beginTransaction();

    const order = await connection.execute(sql, [userId, sellerId]);

    console.log(order);

    let orderId = order[0].insertId;

    let insertProducts = listOfproducts.map((product) => {
      return `( "${orderId}", "${product}", "${1}")`;
    });

    const sql2 = `INSERT INTO order_items(order_id, product_id, quantity) VALUES ${insertProducts.join(
      ", "
    )};`;

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

module.exports = { createOrder };
