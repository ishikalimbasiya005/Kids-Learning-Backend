# Magic Learn World 🌟 - Backend API

This repository contains the backend REST API for **Magic Learn World**, an interactive educational platform for kids. It is built using Node.js, Express.js, and MongoDB, and handles user authentication, admin management, and database operations for educational content.

🌐 **Live API URL:** `https://kids-learning-backend-2gwg.onrender.com`

*(Note: Visiting the base URL will show "Cannot GET /" as this is purely a REST API, not a web interface. You must hit the specific endpoints listed below.)*

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas)
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT) & bcrypt for secure password hashing
- **Middleware:** CORS, cookie-parser, express-session

---

## ✨ Features

- **Secure Authentication System:** Login and registration endpoints with JWT and HTTP-only cookies.
- **Admin Dashboard API:** Separate secure routes for administrators to manage users, feedback, and content.
- **Dynamic Content Delivery:** API endpoints that serve subjects, chapters, and books dynamically from the database.
- **Cookie & Session Management:** Configured with `trust proxy` for secure session handling behind load balancers in production.

---

## 🔗 Main API Endpoints

### Authentication
- `POST /auth/register` - Register a new user account.
- `POST /auth/login` - Authenticate a user and issue a JWT cookie.
- `POST /auth/logout` - Clear the authentication cookie.

### Admin
- `POST /admin/login` - Authenticate an admin user.
- `GET /admin/dashboard` - Retrieve dashboard statistics (protected).

### Content (Books & Subjects)
- `GET /books` - Fetch all subjects and their associated chapters.
- `POST /books/add` - Add a new chapter to a subject (Admin only).
- `DELETE /books/delete/:subjectId/:chapterId` - Remove a chapter (Admin only).

---

## 🚀 How to Run Locally

If you'd like to run the backend server on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ishikalimbasiya005/Kids-Learning-Backend.git
   cd Kids-Learning-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/kids_website?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Verify the server is running:**
   You should see `Server is running on port 5000` and `MongoDB is connected` in your console.

---

## 👩‍💻 Developed By

**Ishika Limbasiya**
- [GitHub Profile](https://github.com/ishikalimbasiya005)
