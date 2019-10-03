DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Laser Light Cannon", "Weapons", 10000.00, 1),
("Gem Destabilizer", "Weapons", 225.50, 300),
("Golf Quest Mini", "Video Games", 34.99, 500),
("Teens of Rage", "Video Games", 49.99, 250),
("French Fry Bits", "Food", 0.99, 50),
("Cookie Cat", "Food", 2.50, 75),
("Ranger Guy", "Collectibles", 0.25, 2),
("Dave Guy", "Collectibles", 0.25, 999),
("Dondai Supremo", "Vehicles", 1249.99, 12),
("Greg Universe Band Tee", "Apparel", 15, 45);
