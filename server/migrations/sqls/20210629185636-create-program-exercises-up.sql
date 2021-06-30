/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS program_exercises (
  id INT AUTO_INCREMENT PRIMARY KEY,
  program_id INT NOT NULL,
  exercise_id INT NOT NULL,
  sets INT DEFAULT NULL,
  reps INT DEFAULT NULL,
  weight INT DEFAULT NULL,
  weightUnit varchar(10),
  time INT DEFAULT NULL,
  distance INT DEFAULT NULL,
  distanceUnit varchar(10) DEFAULT NULL,
  type varchar(10) NOT NULL,
  FOREIGN KEY (program_id) REFERENCES programs(id),
  FOREIGN KEY (exercise_id) REFERENCES predefined_exercises(id)
);