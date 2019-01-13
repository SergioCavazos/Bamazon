DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	  item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER (7),
    PRIMARY KEY(item_id)

);

SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro 15in", "Electronics", 1299.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canon DSLR 80D", "Electronics", 999.00, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Siviki Stainless Steel Wrist Watch", "Watches", 59.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hanes Men's Ecosmart Fleece Sweatshirt", "Clothing", 7.02, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiderman", "Video Games", 39.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Dead Redemption II", "Video Games", 59.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LEGO Harry Potter the Chamber of Secrets", "Toys", 69.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Less: a Novel", "Books", 17.68, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Modernist Bread", "Books", 502.20, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Columbia Men Bugaboo Fleece Jacket", "Clothing", 200.00, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Casio Men's G-Shock", "Watches", 69.95, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Engino Discovering Steam", "Toys", 30.95, 87);

SELECT item_id, product_name, price FROM products -- Seleccionar todo--

UPDATE products SET stock_quantity = 99 WHERE item_id = 1
