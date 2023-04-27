"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  const sql1 =
    "CREATE TABLE IF NOT EXISTS `users` ( `id` int NOT NULL AUTO_INCREMENT, `username` varchar(50) NOT NULL, `password` varchar(255) NOT NULL, `type` enum('seller','buyer') NOT NULL, `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), UNIQUE KEY `username` (`username`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
  const sql2 =
    "CREATE TABLE IF NOT EXISTS `products` (    `id` int NOT NULL AUTO_INCREMENT,    `name` varchar(255) NOT NULL,    `price` decimal(10, 2) NOT NULL,    PRIMARY KEY (`id`)  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci";
  const sql3 =
    "CREATE TABLE IF NOT EXISTS `catalogs` (    `id` int NOT NULL AUTO_INCREMENT,    `seller_id` int NOT NULL,    `name` varchar(255) NOT NULL,    `description` text,    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,    PRIMARY KEY (`id`),    UNIQUE KEY `seller_id` (`seller_id`)  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
  const sql4 =
    "CREATE TABLE IF NOT EXISTS `catalog_products` (    `id` int NOT NULL AUTO_INCREMENT,    `catalog_id` int NOT NULL,    `product_id` int NOT NULL,    PRIMARY KEY (`id`),    UNIQUE KEY `catalog_product_id` (`catalog_id`,`product_id`)  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ";
  const sql5 =
    "CREATE TABLE IF NOT EXISTS `orders` (    `id` int NOT NULL AUTO_INCREMENT,    `buyer_id` int NOT NULL,    `seller_id` int NOT NULL,    PRIMARY KEY (`id`)  ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
  const sql6 =
    "CREATE TABLE IF NOT EXISTS `order_items` (    `order_id` int NOT NULL,    `product_id` int NOT NULL,    `quantity` int NOT NULL  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci";
  
  db.runSql(sql1);
  db.runSql(sql2);
  db.runSql(sql3);
  db.runSql(sql4);
  db.runSql(sql5);
  db.runSql(sql6);

  return null;
};

exports.down = function (db) {
  const sql1 = "DROP TABLE IF EXISTS users";
  const sql2 = "DROP TABLE IF EXISTS products";
  const sql3 = "DROP TABLE IF EXISTS catalogs";
  const sql4 = "DROP TABLE IF EXISTS catalog_products";
  const sql5 = "DROP TABLE IF EXISTS orders";
  const sql6 = "DROP TABLE IF EXISTS order_items";

  db.runSql(sql1);
  db.runSql(sql2);
  db.runSql(sql3);
  db.runSql(sql4);
  db.runSql(sql5);
  db.runSql(sql6);

  return null;
};

exports._meta = {
  version: 1,
};
