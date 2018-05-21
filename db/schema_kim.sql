DROP DATABASE IF EXISTS camping_db;
CREATE DATABASE camping_db;
USE camping_db;

CREATE TABLE checklist
(
    id INT (11) NOT NULL AUTO-INCREMENT PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    tent_ware VARCHAR (100) NOT NULL,
    kitchen_ware VARCHAR (100) NOT NULL,
    kitchen_cleanup VARCHAR (100) NOT NULL,
    campfire BOOLEAN (100) default true,
    electronics BOOLEAN default false,
    completed_at DATETIME NULL
);