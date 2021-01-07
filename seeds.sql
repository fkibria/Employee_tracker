USE employees;
INSERT INTO department(name) values("sales"), ("HR"), ("IT"), ("payroll"); 

INSERT INTO role(title, salary, department_id) values("salesperson", 40000, 1), ("HR rep", 50000, 2), ("developer", 55000, 3), ("accountant", 60000, 4);
INSERT INTO employee(first_name, last_name, role_id, manager_id) values("Bob", "Smith", 1, 2), ("Janet", "Jackson", 3, 2);