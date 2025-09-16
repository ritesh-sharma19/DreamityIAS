-- SQL for users table
CREATE DATABASE IF NOT EXISTS sarrthi_portfolio;
USE sarrthi_portfolio;
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);
