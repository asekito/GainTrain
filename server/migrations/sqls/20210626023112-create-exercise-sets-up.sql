/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS exercise_sets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  exercises JSON NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)