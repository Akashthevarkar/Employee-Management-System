# 🧑‍💼 Employee Management System

[![GitHub](https://img.shields.io/badge/github-Akashthevarkar-blue?style=flat&logo=github)](https://github.com/Akashthevarkar) 
[![Java](https://img.shields.io/badge/Java-17-orange?style=flat&logo=java)](https://www.oracle.com/java/) 
[![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)](https://reactjs.org/) 
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.1.5-green?style=flat&logo=spring)](https://spring.io/projects/spring-boot) 
[![MySQL](https://img.shields.io/badge/MySQL-8-blue?style=flat&logo=mysql)](https://www.mysql.com/)

---

## 🚀 About the Project
Employee Management System is a **full-stack web application** that helps manage employee records efficiently. You can:

- Add, view, update, and delete employees
- Search and filter employees by ID or name
- Enjoy a responsive UI with real-time feedback

This project demonstrates **modern web development** practices using React, Spring Boot, and MySQL.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Bootstrap, Axios |
| Backend  | Spring Boot, Java, Maven |
| Database | MySQL |
| Tools    | VS Code, Postman, Git |
## How to Run

### Backend
1. Go to backend folder: `cd backend`
2. Update `application.properties` with your MySQL credentials
3. Build and run:  
   ```bash
   mvn clean install
   mvn spring-boot:run

4. Backend will run on: `http://localhost:8080`

### Frontend

1. Go to frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start frontend: `npm start`
4. Frontend will run on: `http://localhost:3000`

## API Endpoints

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| GET    | /api/employees             | Get all employees        |
| GET    | /api/employees/{id}        | Get employee by ID       |
| GET    | /api/employees?name={name} | Filter employees by name |
| POST   | /api/employees             | Add new employee         |
| PUT    | /api/employees/{id}        | Update employee          |
| DELETE | /api/employees/{id}        | Delete employee          |

## ⚡ Features
- ✅ CRUD operations for employees  
- ✅ Search/filter employees by ID or Name  
- ✅ Form validation and error handling  
- ✅ Responsive UI with Bootstrap  
- ✅ Toast notifications for user actions  



