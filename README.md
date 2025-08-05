# 🌟 Golden Today Project

Golden Today is a **full-stack wellness and income platform** built with:

- **Frontend**: React + TypeScript + Tailwind CSS (Vite)
- **Backend**: Spring Boot + MongoDB + JWT Authentication

---

## 📂 Project Structure

```
goldentoday/
├── frontend/          # React Vite project (UI)
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
└── backend/           # Spring Boot project (API + JWT + MongoDB)
    ├── src/main/java/
    ├── src/main/resources/
    ├── pom.xml
```

---

## 🚀 Features

- **Frontend**
  - Beautiful UI with Tailwind
  - Login / Signup pages
  - Protected routes (Profile Page)
  - Responsive design

- **Backend**
  - JWT-based Authentication
  - Login & Signup APIs
  - MongoDB Database Integration
  - BCrypt Password Encryption

---

## 🖥️ How to Run Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open **http://localhost:5173** in your browser.

---

## ⚙️ How to Run Backend

1. Navigate to the `backend` folder in your IDE (IntelliJ/Eclipse/VS Code).
2. Set MongoDB connection in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/goldentoday
   jwt.secret=your-512-bit-secret-key
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
4. Backend runs on **http://localhost:8080**

---

## 🔑 API Endpoints

| Method | Endpoint       | Description                    |
|--------|---------------|--------------------------------|
| POST   | `/api/signup` | Register a new user            |
| POST   | `/api/login`  | Login and receive JWT token    |
| GET    | `/api/profile`| Access protected user profile  |

- **JWT Token** is required for all protected routes.
- Store the token in **localStorage** on login.

---

## 🤝 Collaborators

- **Parth Kag** – Full Stack Developer


---


