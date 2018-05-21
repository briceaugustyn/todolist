DROP DATABASE IF EXISTS TodoList_db;

CREATE DATABASE TodoList_db
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_general_ci;

USE TodoList_db;

CREATE TABLE Users
(
    user_uuid VARCHAR (50) UNIQUE PRIMARY KEY,
    email_address VARCHAR(150) UNIQUE,

    display_name VARCHAR(100) NOT NULL,
    password VARCHAR(100),

    first_seen_date BIGINT,
    last_modified_date BIGINT,
    deleted BOOL DEFAULT false,

    INDEX(email_address),
    INDEX(user_uuid)
)

ENGINE = InnoDB;
