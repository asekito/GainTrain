/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS programs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  program_date DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);