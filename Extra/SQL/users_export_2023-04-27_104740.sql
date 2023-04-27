CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` enum('seller','buyer') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:46:43', 1, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller', 'seller1');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:46:43', 2, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller', 'seller2');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:46:43', 3, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller', 'seller3');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:46:43', 4, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller', 'seller4');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:46:43', 5, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'seller', 'seller5');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:47:21', 6, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer', 'buyer1');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:47:21', 7, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer', 'buyer2');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:47:21', 8, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer', 'buyer3');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:47:21', 9, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer', 'buyer4');
insert into `users` (`created_at`, `id`, `password`, `type`, `username`) values ('2023-04-25 23:47:21', 10, '$2y$10$VfEnlxTwqL81vMFlIL4P7uMRs47gAhvnPE7q/ERmdV6EEMkD9Biqm', 'buyer', 'buyer5');
