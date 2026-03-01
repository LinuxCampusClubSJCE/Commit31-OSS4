<img src="Commit31.png" alt="Commit31 Banner"/>

# Commit31-OSS4
A community web application for students to build profiles, publish technical blogs, and interact with other developers through likes and comments.

# 🚀 Student Developer Platform

The **Student Developer Platform** is a full-stack web application where students can build their developer identity, publish technical blogs, and interact with other developers in a collaborative and open environment.

This platform promotes learning in public, knowledge sharing, and beginner-friendly open-source contributions.

---

# 🌟 Core Features

## 👤 User Features

* User registration & login (JWT authentication)
* Secure password hashing using bcrypt
* Create and edit developer profile
* Add bio, skills, and project links
* View other developers' profiles

---

## 📝 Blog System

* Create blog posts
* Edit and delete your own posts
* View all published posts
* View individual post details
* Display author information on each post
* Timestamp for posts

---

## 💬 Interaction System

* Comment on blog posts
* Delete your own comments
* Like / Unlike posts
* View total likes count per post

---

## 🔐 Authentication & Security

* JWT-based authentication
* Protected routes (only logged-in users can post/comment)
* Password encryption with bcrypt
* Environment variable protection (.env)

---

## 🎨 Frontend Features

* Responsive UI (Tailwind CSS)
* Clean blog feed layout
* Developer profile page
* Routing with React Router
* API integration with Axios
* Form validation
* Modern UI structure

---

## 🗄 Backend Features

* RESTful API architecture
* PostgreSQL relational database
* Structured folder architecture
* Modular routes & controllers
* Environment-based configuration

---

# 🏗 Tech Stack

### Frontend

* React (JavaScript)
* Tailwind CSS
* Axios
* React Router

### Backend

* Express.js
* PostgreSQL
* JWT Authentication
* bcrypt

---

# 📁 Project Structure

```
Commit31-OSS4/
│
├── frontend/                      # Frontend (React)
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/              # Images, icons
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/               # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── BlogFeed.jsx
│   │   │   ├── BlogDetails.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── CreatePost.jsx
│   │   │
│   │   ├── context/             # Global state
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── services/            # API calls
│   │   │   ├── authService.js
│   │   │   ├── postService.js
│   │   │   └── commentService.js
│   │   │
│   │   ├── utils/               # Helper functions
│   │   │   └── formatDate.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js
│
│
├── backend/                      # Backend (Express)
│   ├── config/
│   │   └── db.js                # PostgreSQL connection
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   ├── commentController.js
│   │   └── profileController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   ├── postModel.js
│   │   ├── commentModel.js
│   │   └── likeModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   ├── commentRoutes.js
│   │   └── profileRoutes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
│
├── README.md
├── .gitignore
└── package.json (optional root config)
```

---

# ⚙️ Local Development Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Commit31-OSS4.git
cd Commit31-OSS4
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```
PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/Commit31-OSS4
JWT_SECRET=supersecretkey
```

Run backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🐘 Database Setup

Install PostgreSQL and create database:

```sql
CREATE DATABASE Commit31-OSS4;
```

---

# 🤝 Contributing (Beginner Friendly)

We welcome new open-source contributors 🎉

### Steps to Contribute:

1. Fork this repository
2. Clone your fork
3. Create a new feature branch
4. Make your changes
5. Commit your changes
6. Push to your fork
7. Create a Pull Request

---

## Example Contribution Commands

```bash
git checkout -b feature/add-dark-mode
git add .
git commit -m "Added dark mode feature"
git push origin feature/add-dark-mode
```

---

# 📌 Contribution Guidelines

* Do not push directly to `main` 
* Create feature branches
* Use meaningful commit messages
* Follow existing folder structure
* Test before submitting PR

---

# 🛣 Future Improvements (Roadmap)

* 🌙 Dark mode
* 🔔 Notifications system
* 👥 Follow other developers
* 🏷 Tags & categories
* 📝 Markdown editor
* 🔍 Search & filtering
* 📊 User dashboard
* 🚀 Deployment guide

---

# 👨‍💻 Author

Vansh Rathore

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🤝 Contribute

---
