CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `buyer_id` int NOT NULL,
  `seller_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;insert into `orders` (`buyer_id`, `id`, `seller_id`) values (8, 3, 1);
insert into `orders` (`buyer_id`, `id`, `seller_id`) values (8, 4, 1);
insert into `orders` (`buyer_id`, `id`, `seller_id`) values (8, 5, 1);
insert into `orders` (`buyer_id`, `id`, `seller_id`) values (17, 6, 1);
