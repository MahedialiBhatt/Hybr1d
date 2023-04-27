CREATE TABLE `catalog_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `catalog_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `catalog_product_id` (`catalog_id`,`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (1, 1, 1);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (1, 2, 2);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (1, 3, 4);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (1, 4, 7);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (2, 5, 3);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (2, 6, 5);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (2, 7, 6);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (3, 8, 1);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (3, 9, 8);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (3, 10, 9);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (3, 11, 10);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (4, 12, 2);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (4, 13, 3);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (4, 14, 6);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (4, 15, 8);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (5, 16, 1);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (5, 17, 3);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (5, 18, 5);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (5, 19, 7);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (5, 20, 10);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (6, 21, 2);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (6, 22, 4);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (6, 23, 6);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (6, 24, 8);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (7, 25, 1);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (7, 26, 2);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (7, 27, 3);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (7, 28, 4);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (7, 29, 5);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (8, 30, 6);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (8, 31, 7);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (8, 32, 8);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (8, 33, 9);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (8, 34, 10);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (9, 35, 1);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (9, 36, 4);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (9, 37, 6);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (9, 38, 8);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (9, 39, 10);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (10, 40, 2);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (10, 41, 3);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (10, 42, 5);
insert into `catalog_products` (`catalog_id`, `id`, `product_id`) values (10, 43, 7);
