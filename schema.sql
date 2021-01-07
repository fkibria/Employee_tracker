DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department (
    id INT unsigned AUTO_INCREMENT primary key,
    name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE role (
    id INT unsigned AUTO_INCREMENT primary key,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL unsigned NOT NULL,
    department_id INT unsigned NOT NULL
);
CREATE TABLE employee (
    id INT unsigned AUTO_INCREMENT primary key,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) UNIQUE NOT NULL,
    role_id INT unsigned NOT NULL,
    manager_id INT unsigned NOT NULL
);