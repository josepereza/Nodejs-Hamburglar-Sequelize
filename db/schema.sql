### Schema

CREATE DATABASE burgersSeq_db;
USE burgersSeq_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP
);