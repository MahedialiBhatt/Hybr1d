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
  let users = [
    {
      username: "seller1",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "seller",
    },
    {
      username: "seller2",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "seller",
    },
    {
      username: "seller3",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "seller",
    },
    {
      username: "seller4",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "seller",
    },
    {
      username: "seller5",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "seller",
    },
    {
      username: "buyer1",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "buyer",
    },
    {
      username: "buyer2",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "buyer",
    },
    {
      username: "buyer3",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "buyer",
    },
    {
      username: "buyer4",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "buyer",
    },
    {
      username: "buyer5",
      password: "$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm",
      type: "buyer",
    },
  ];

  let products = [
    {
      name: "Product 1",
      price: 10.99,
    },
    {
      name: "Product 2",
      price: 20.99,
    },
    {
      name: "Product 3",
      price: 5.99,
    },
    {
      name: "Product 4",
      price: 15.99,
    },
    {
      name: "Product 5",
      price: 8.99,
    },
    {
      name: "Product 6",
      price: 7.99,
    },
    {
      name: "Product 7",
      price: 25.99,
    },
    {
      name: "Product 8",
      price: 12.99,
    },
    {
      name: "Product 9",
      price: 18.99,
    },
    {
      name: "Product 10",
      price: 9.99,
    },
    {
      name: "Product 11",
      price: 14.99,
    },
    {
      id: 12,
      name: "Product 12",
      price: 21.99,
    },
    {
      id: 13,
      name: "Product 13",
      price: 6.99,
    },
    {
      id: 14,
      name: "Product 14",
      price: 11.99,
    },
    {
      id: 15,
      name: "Product 15",
      price: 17.99,
    },
    {
      id: 16,
      name: "Product 16",
      price: 22.99,
    },
    {
      id: 17,
      name: "Product 17",
      price: 19.99,
    },
    {
      id: 18,
      name: "Product 18",
      price: 27.99,
    },
    {
      id: 19,
      name: "Product 19",
      price: 24.99,
    },
    {
      id: 20,
      name: "Product 20",
      price: 16.99,
    },
    {
      id: 21,
      name: "Product 21",
      price: 8.99,
    },
    {
      id: 22,
      name: "Product 22",
      price: 15.99,
    },
    {
      id: 23,
      name: "Product 23",
      price: 10.99,
    },
    {
      id: 24,
      name: "Product 24",
      price: 12.99,
    },
    {
      id: 25,
      name: "Product 25",
      price: 23.99,
    },
    {
      id: 26,
      name: "Product 26",
      price: 9.99,
    },
    {
      id: 27,
      name: "Product 27",
      price: 11.99,
    },
    {
      id: 28,
      name: "Product 28",
      price: 14.99,
    },
    {
      id: 29,
      name: "Product 29",
      price: 17.99,
    },
    {
      id: 30,
      name: "Product 30",
      price: 6.99,
    },
    {
      id: 31,
      name: "Product 31",
      price: 19.99,
    },
    {
      id: 32,
      name: "Product 32",
      price: 22.99,
    },
    {
      id: 33,
      name: "Product 33",
      price: 27.99,
    },
    {
      id: 34,
      name: "Product 34",
      price: 24.99,
    },
    {
      id: 35,
      name: "Product 35",
      price: 16.99,
    },
    {
      id: 36,
      name: "Product 36",
      price: 8.99,
    },
    {
      id: 37,
      name: "Product 37",
      price: 15.99,
    },
    {
      id: 38,
      name: "Product 38",
      price: 10.99,
    },
    {
      id: 39,
      name: "Product 39",
      price: 12.99,
    },
    {
      id: 40,
      name: "Product 40",
      price: 23.99,
    },
  ];
  // db.insert("users", users);
  // db.insert("products", products);

  db.runSql(`
  INSERT INTO users (id, username, password, type) VALUES
  (1, 'seller1', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller'),
  (2, 'seller2', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller'),
  (3, 'seller3', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller'),
  (4, 'seller4', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller'),
  (5, 'seller5', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller'),
  (6, 'buyer1', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer'),
  (7, 'buyer2', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer'),
  (8, 'buyer3', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer'),
  (9, 'buyer4', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer'),
  (10, 'buyer5', '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer');
`);

  db.runSql(`
  insert into products (id, name, price) values (1, 'Product 1', '10.99');
  insert into products (id, name, price) values (2, 'Product 2', '20.99');
  insert into products (id, name, price) values (3, 'Product 3', '5.99');
  insert into products (id, name, price) values (4, 'Product 4', '15.99');
  insert into products (id, name, price) values (5, 'Product 5', '8.99');
  insert into products (id, name, price) values (6, 'Product 6', '7.99');
  insert into products (id, name, price) values (7, 'Product 7', '25.99');
  insert into products (id, name, price) values (8, 'Product 8', '12.99');
  insert into products (id, name, price) values (9, 'Product 9', '18.99');
  insert into products (id, name, price) values (10, 'Product 10', '9.99');
  insert into products (id, name, price) values (11, 'Product 11', '14.99');
  insert into products (id, name, price) values (12, 'Product 12', '21.99');
  insert into products (id, name, price) values (13, 'Product 13', '6.99');
  insert into products (id, name, price) values (14, 'Product 14', '11.99');
  insert into products (id, name, price) values (15, 'Product 15', '17.99');
  insert into products (id, name, price) values (16, 'Product 16', '22.99');
  insert into products (id, name, price) values (17, 'Product 17', '19.99');
  insert into products (id, name, price) values (18, 'Product 18', '27.99');
  insert into products (id, name, price) values (19, 'Product 19', '24.99');
  insert into products (id, name, price) values (20, 'Product 20', '16.99');
  insert into products (id, name, price) values (21, 'Product 21', '8.99');
  insert into products (id, name, price) values (22, 'Product 22', '15.99');
  insert into products (id, name, price) values (23, 'Product 23', '10.99');
  insert into products (id, name, price) values (24, 'Product 24', '12.99');
  insert into products (id, name, price) values (25, 'Product 25', '23.99');
  insert into products (id, name, price) values (26, 'Product 26', '9.99');
  insert into products (id, name, price) values (27, 'Product 27', '11.99');
  insert into products (id, name, price) values (28, 'Product 28', '14.99');
  insert into products (id, name, price) values (29, 'Product 29', '17.99');
  insert into products (id, name, price) values (30, 'Product 30', '6.99');
  insert into products (id, name, price) values (31, 'Product 31', '19.99');
  insert into products (id, name, price) values (32, 'Product 32', '22.99');
  insert into products (id, name, price) values (33, 'Product 33', '27.99');
  insert into products (id, name, price) values (34, 'Product 34', '24.99');
  insert into products (id, name, price) values (35, 'Product 35', '16.99');
  insert into products (id, name, price) values (36, 'Product 36', '8.99');
  insert into products (id, name, price) values (37, 'Product 37', '15.99');
  insert into products (id, name, price) values (38, 'Product 38', '10.99');
  insert into products (id, name, price) values (39, 'Product 39', '12.99');
  insert into products (id, name, price) values (40, 'Product 40', '23.99');
  `);

  db.runSql(`
  insert into catalogs ( description, id, name, seller_id) values ( 'Catalog', 1, 'Catalog', 1);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 2', 2, 'Catalog 1 - Seller 2', 2);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 3', 3, 'Catalog 1 - Seller 3', 3);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 4', 4, 'Catalog 1 - Seller 4', 4);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 5', 5, 'Catalog 1 - Seller 5', 5);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 6', 6, 'Catalog 1 - Seller 6', 6);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 7', 7, 'Catalog 1 - Seller 7', 7);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 8', 8, 'Catalog 1 - Seller 8', 8);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 9', 9, 'Catalog 1 - Seller 9', 9);
  insert into catalogs ( description, id, name, seller_id) values ( 'This is the first catalog for seller 10', 10, 'Catalog 1 - Seller 10', 10);
  `);

  db.runSql(`
  insert into catalog_products (catalog_id, id, product_id) values (1, 1, 1);
  insert into catalog_products (catalog_id, id, product_id) values (1, 2, 2);
  insert into catalog_products (catalog_id, id, product_id) values (1, 3, 4);
  insert into catalog_products (catalog_id, id, product_id) values (1, 4, 7);
  insert into catalog_products (catalog_id, id, product_id) values (2, 5, 3);
  insert into catalog_products (catalog_id, id, product_id) values (2, 6, 5);
  insert into catalog_products (catalog_id, id, product_id) values (2, 7, 6);
  insert into catalog_products (catalog_id, id, product_id) values (3, 8, 1);
  insert into catalog_products (catalog_id, id, product_id) values (3, 9, 8);
  insert into catalog_products (catalog_id, id, product_id) values (3, 10, 9);
  insert into catalog_products (catalog_id, id, product_id) values (3, 11, 10);
  insert into catalog_products (catalog_id, id, product_id) values (4, 12, 2);
  insert into catalog_products (catalog_id, id, product_id) values (4, 13, 3);
  insert into catalog_products (catalog_id, id, product_id) values (4, 14, 6);
  insert into catalog_products (catalog_id, id, product_id) values (4, 15, 8);
  insert into catalog_products (catalog_id, id, product_id) values (5, 16, 1);
  insert into catalog_products (catalog_id, id, product_id) values (5, 17, 3);
  insert into catalog_products (catalog_id, id, product_id) values (5, 18, 5);
  insert into catalog_products (catalog_id, id, product_id) values (5, 19, 7);
  insert into catalog_products (catalog_id, id, product_id) values (5, 20, 10);
  insert into catalog_products (catalog_id, id, product_id) values (6, 21, 2);
  insert into catalog_products (catalog_id, id, product_id) values (6, 22, 4);
  insert into catalog_products (catalog_id, id, product_id) values (6, 23, 6);
  insert into catalog_products (catalog_id, id, product_id) values (6, 24, 8);
  insert into catalog_products (catalog_id, id, product_id) values (7, 25, 1);
  insert into catalog_products (catalog_id, id, product_id) values (7, 26, 2);
  insert into catalog_products (catalog_id, id, product_id) values (7, 27, 3);
  insert into catalog_products (catalog_id, id, product_id) values (7, 28, 4);
  insert into catalog_products (catalog_id, id, product_id) values (7, 29, 5);
  insert into catalog_products (catalog_id, id, product_id) values (8, 30, 6);
  insert into catalog_products (catalog_id, id, product_id) values (8, 31, 7);
  insert into catalog_products (catalog_id, id, product_id) values (8, 32, 8);
  insert into catalog_products (catalog_id, id, product_id) values (8, 33, 9);
  insert into catalog_products (catalog_id, id, product_id) values (8, 34, 10);
  insert into catalog_products (catalog_id, id, product_id) values (9, 35, 1);
  insert into catalog_products (catalog_id, id, product_id) values (9, 36, 4);
  insert into catalog_products (catalog_id, id, product_id) values (9, 37, 6);
  insert into catalog_products (catalog_id, id, product_id) values (9, 38, 8);
  insert into catalog_products (catalog_id, id, product_id) values (9, 39, 10);
  insert into catalog_products (catalog_id, id, product_id) values (10, 40, 2);
  insert into catalog_products (catalog_id, id, product_id) values (10, 41, 3);
  insert into catalog_products (catalog_id, id, product_id) values (10, 42, 5);
  insert into catalog_products (catalog_id, id, product_id) values (10, 43, 7);
`);

  db.runSql("insert into orders (buyer_id, id, seller_id) values (8, 3, 1);");

  db.runSql(`
  insert into order_items (order_id, product_id, quantity) values (3, 1, 1);
  insert into order_items (order_id, product_id, quantity) values (3, 2, 1);
  insert into order_items (order_id, product_id, quantity) values (3, 3, 1);
  `);

  return null;
};

exports.down = function (db) {
  db.runSql(`TRUNCATE TABLE users`);
  db.runSql(`TRUNCATE TABLE products`);
  db.runSql(`TRUNCATE TABLE catalogs`);
  db.runSql(`TRUNCATE TABLE catalog_products`);
  db.runSql(`TRUNCATE TABLE orders`);
  db.runSql(`TRUNCATE TABLE order_items`);

  return null;
};

exports._meta = {
  version: 1,
};
