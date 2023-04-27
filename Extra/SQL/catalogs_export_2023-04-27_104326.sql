CREATE TABLE `catalogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seller_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `seller_id` (`seller_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'Catalog', 1, 'Catalog', 1);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 2', 2, 'Catalog 1 - Seller 2', 2);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 3', 3, 'Catalog 1 - Seller 3', 3);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 4', 4, 'Catalog 1 - Seller 4', 4);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 5', 5, 'Catalog 1 - Seller 5', 5);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 6', 6, 'Catalog 1 - Seller 6', 6);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 7', 7, 'Catalog 1 - Seller 7', 7);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 8', 8, 'Catalog 1 - Seller 8', 8);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 9', 9, 'Catalog 1 - Seller 9', 9);
insert into `catalogs` (`created_at`, `description`, `id`, `name`, `seller_id`) values ('2023-04-25 23:52:30', 'This is the first catalog for seller 10', 10, 'Catalog 1 - Seller 10', 10);
