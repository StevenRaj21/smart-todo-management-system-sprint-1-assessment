# smart-todo-management-system-sprint-1-assessment

A full-stack Todo Management System built using React, Node.js, Express, and PostgreSQL. The application enables users to manage tasks with CRUD operations, search functionality, and persistent database storage.

---

## Features

* Create tasks
* Update tasks
* Delete tasks
* Search tasks
* REST API integration
* PostgreSQL database storage

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* PostgreSQL (pg)
* CORS

---

## Project Structure

todo-list-application/
│
├── todo-list-app-frontend/
├── todo-list-app-backend/
└── README.md

```

---

## Installation and Setup

### 1. Clone Repository

```

git clone <https://github.com/StevenRaj21/smart-todo-management-system-sprint-1-assessment.git>
cd smart-todo-management-system-sprint-1-assessment

```

---

### 2. Backend Setup

```

cd todo-list-app-backend
npm install
npm start

```

---

### 3. Frontend Setup

```

cd todo-list-app-frontend
npm install
npm run dev

```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```

DATABASE_URL=your_postgresql_connection_string
PORT=5000

```

---

## Database Setup (PostgreSQL)

```

CREATE DATABASE todo_db;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

---

## API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /tasks     | Fetch all tasks |
| POST   | /tasks     | Create a task   |
| PUT    | /tasks/:id | Update a task   |
| DELETE | /tasks/:id | Delete a task   |

---

## Deployment

* Backend: Render
* Database: PostgreSQL (Render)

---

## Author

Jetikeni Steven Raj
Full-Stack Developer (Trainee)

---

## Future Improvements

* Authentication (JWT)
* Pagination
* UI enhancements
* Docker support
