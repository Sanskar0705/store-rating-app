# store-rating-app

A full-stack web application that allows users to rate stores and access role-specific features.

## 🚀 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js (Express.js)
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **Validation**: Formik/Yup (Frontend), express-validator (Backend)

---

## 👥 User Roles & Functionalities

### 1. 🔐 System Administrator
- Add new stores and users (Admin / Normal / Store Owner)
- View dashboard:
  - Total users
  - Total stores
  - Total ratings
- View & filter user and store listings
- View user details (including rating if Store Owner)

### 2. 👤 Normal User
- Register and login
- View all registered stores:
  - Name, Address, Overall Rating
  - Your Submitted Rating
  - Submit or update rating (1 to 5)
- Search stores by Name and Address

### 3. 🏪 Store Owner
- Login
- View a list of users who rated their store
- View average rating of their store

## 🧠 Features

- JWT-based Authentication
- Role-based Access Control
- Password Hashing using Bcrypt
- Search, Filter, Sort on all tables
- Responsive UI (React + Bootstrap or MUI)

---

## 📁 Folder Structure

store-rating-app/
├── frontend/ # React client
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.js
│ └── public/
│
├── backend/ # Express + PostgreSQL API
│ ├── controllers/
│ ├── routes/
│ ├── middlewares/
│ ├── models/
│ ├── config/
│ ├── app.js
│ └── server.js
│
└── README.md
