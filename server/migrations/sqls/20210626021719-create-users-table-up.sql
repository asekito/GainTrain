/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password CHAR(60) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  date_deleted TIME NULL DEFAULT NULL,
  deleted SMALLINT DEFAULT 0
);