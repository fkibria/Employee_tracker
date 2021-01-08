const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Faizahkibria1!",
    database: "employees"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    askQuestion();
})



function askQuestion() {
    inquirer.prompt([
        {
            name:"userChoice",
            type:"list",
            choices: ["View all employees", "View All Employees by Department", "View All Employees by Manager", "Add Employee", "Remove Employee", "Update Employee role","Update Employee Manager",],
            message: "What would you like to do?"
        }
    ])
    .then(function(response){
       const userChoice = response.userChoice;
       switch(userChoice){
        case "View All Employees": 
        viewAll();
        break;   
        case "View All Employees by Department": 
        viewDepartment();
        break;
        case "View All Employees by Manager": 
        viewManager();
        break;
        case "Add Employee": 
        addEmployee();
        break;
        case "Remove Employee":
        removeEmployee();
        break;
        case "Update Employee role": 
        updateEmployeeRole();
        break;
        case "Update Employee Manager": 
        updateEmployeeManager();
        break;
       }
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            name:"first_name",
            type:"input",
            message: "What is the first name?"
        },
        {
            name:"last_name",
            type:"input",
            message: "What is the last name?"
        },
        {
            name:"role_id",
            type:"input",
            message: "What is the role id?"
        },
        {
            name:"manager_id",
            type:"input",
            message: "What is the manager id?"
        },
    ])
    .then(function(answers){
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
        [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
        (err, res) => {
            if(err) throw err;
            console.table(res);
            askQuestion();
            })
    })
}

function viewAll(){
    connection.query("SELECT * FROM employee;",
    function(err, res){
        if(err) throw err;
        console.table(res);
        askQuestion();
    })
}
// .then(function(answers){
//     const employee= new Employee (answers.first_name, answers.last_name, answers.role_id, answers.manager_id)
//     connection.query("INSERT INTO employee"(employee),
//     function(err, res){
//         if(err) throw err;
//         console.table(res);
//         })
//     askQuestion();
// })