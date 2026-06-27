# 🔐 JWT Authentication API

A secure REST API with user authentication using 
**JSON Web Tokens (JWT)** and **bcryptjs** password hashing.

Developed by **Mahdi Keshavarz**

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

git clone https://github.com/mahdikeshavarz1383/jwt-auth-api.git
cd jwt-auth-api
npm install
node app.js

Server runs on: http://localhost:3000

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /register | Register a new user | ❌ |
| POST | /login | Login and get token | ❌ |
| GET | /profile | Get user profile | ✅ |

---

## 📥 Request Examples

### Register (POST /register)
{
  "username": "mahdi",
  "password": "1234"
}

### Login (POST /login)
{
  "username": "mahdi",
  "password": "1234"
}

### Response (Login Success)
{
  "message": "logged in",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

---

## 🔒 How to use the token

After login, copy the token and add it to your request headers:

Key: authorization
Value: your_token_here

---

## 🛡️ Security Features

- Passwords are hashed using **bcryptjs**
- Authentication via **JSON Web Tokens (JWT)**
- Protected routes with middleware verification
- Token expires after **1 hour**

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- jsonwebtoken
- bcryptjs

---

## 📄 License

This project is **open source** and available under
the MIT License.
Feel free to use, modify, and distribute it freely.

---

## 👨‍💻 Author

**Mahdi Keshavarz**
Computer Engineering Student
Islamic Azad University of Qazvin

GitHub: github.com/mahdikeshavarz1383
Email: mahdikeshavarz1383m@gmail.com
