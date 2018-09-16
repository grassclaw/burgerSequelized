-- Seed Burgers into Database ... No Sesame! (hehehe)
INSERT INTO burgers(burger_name, devoured, date)
VALUES ("Big Mac", false, "2018-08-05 05:10:11"),
  ("Whopping Whopper", false, "2018-08-05 04:25:55"),
  ("CheesyBurga!", false, "2018-08-05 03:20:33"),
  ("WakinBacon", false, "2018-08-05 16:20:00"),
  ("Tri Pounder", false, "2016-08-05 18:20:01"),
  ("FancyBurger", false, "2018-08-05 04:20:20"),
  ("Triple Single?", true, "2018-08-05 18:22:11");




  -- Database Creation
-- CREATE DATABASE burgers_db;

USE burgers_db;


-- Table Creation
CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(50),
	devoured BOOLEAN Default false,
	createdAt TIMESTAMP NOT NULL Default CURRENT_TIMESTAMP);

-- Seed Burgers into Database ... No Sesame! (hehehe)
INSERT INTO burgers(burger_name)
VALUES ("Big Mac"),
  ("Whopping Whopper"),
  ("CheesyBurga!"),
  ("WakinBacon"),
  ("Tri Pounder"),
  ("FancyBurger"),
  ("Triple Single?");
  
  select * from burgers;
  
  USE burgers_db;

  Drop Table if exists burgers;