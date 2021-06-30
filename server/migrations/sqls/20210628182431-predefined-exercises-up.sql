/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS predefined_exercises (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  exercise VARCHAR(150) NOT NULL,
  description VARCHAR(300) DEFAULT NULL,
  image_example VARCHAR(200) DEFAULT NULL,
  main_target_muscle_group SMALLINT DEFAULT -1,
  complementary_muscle_group SMALLINT DEFAULT -1
)

/*
  -1 - None chosen
  0 - Cardio
  1 - Shoulders
  2 - Chest
  3 - Biceps
  4 - Triceps
  5 - Abdominals
  6 - Back
  7 - Legs
*/