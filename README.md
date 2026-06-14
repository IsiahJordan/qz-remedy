# **Quiz Remedy (Qz-Remedy)**

## **What is Qz-Remedy?**
Qz-Remedy is an react application with python as the backend. The goal of the project is to not only help users to 
create fun quizzes but more importantly, make an effecient learning experience with the application learning
tools

## **Setup Requirements**
Before pulling the project, it's expected for the dev to have MongoDB v8.2, Node v26.2

1. Clone the repository:
   ```bash
   git clone https://github.com/username/project-name.git
   ```

2. Build Docker Image:
  ```bash
  cd client
  docker build -t client .

  cd server
  docker build -t server .
  ```

3. Run Docker Container:
  ```bash
  cd client
  docker run -d -p 5000:5000 client

  cd server
  docker run -d -p 3000:3000 --env-file .env server
  ```

## **Main Features**

Feature 1: Create quiz

Feature 2: Attempt quiz

Feature 3: Search quiz

## **Contributors**

<div>
   <a href="https://github.com/Jcdes" display="inline">
     <img src="https://avatars.githubusercontent.com/Jcdes" width="100px;" style="border-radius:50%;" alt=""/>
   </a>
   <a href="https://github.com/IsiahJordan" display="inline">
     <img src="https://avatars.githubusercontent.com/IsiahJordan" width="100px;"/>
   </a>
</div>
