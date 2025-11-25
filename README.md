
# 📝 Full-Stack React Blog Application

A complete full-stack blog application built with React, Express, MongoDB, and Firebase Authentication. Features user authentication, article system, upvoting, and comments.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)

![Express](https://img.shields.io/badge/Express.js-4.18-000000?logo=express)

![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)

![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase)

## 🚀 Features

### 🔐 Authentication

- **User Registration** - Create new accounts

- **User Login** - Secure authentication with Firebase

- **Protected Routes** - Certain features require authentication

- **Session Management** - Persistent login state

### 📄 Articles System

- **Article Listing** - Browse all available articles

- **Article Details** - Full content with upvoting and comments

- **Upvoting System** - Users can upvote articles (once per user)

- **Comments Section** - Add and view comments on articles

### 🎯 Technical Features

- **React Router** - Client-side routing with loaders

- **RESTful API** - Express backend with proper endpoints

- **Database Integration** - MongoDB with Mongoose-like operations

- **Environment Variables** - Secure configuration management

- **CORS Enabled** - Cross-origin resource sharing

### SAMPLE SCREEN

**Register Page**

![Register][/readme-images/REACT_REGISTER.png]

**Login Page**

![Login][/readme-images/REACT_LOGIN.png]

**Article List Page**

![ArticleList][readme-images/REACT_ARTICLES.png]

**User Interaction Page**
![User Interaction][readme-images/REACT_USER_INTERACTION.png]

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI framework

- **React Router DOM** - Routing

- **Firebase Auth** - Authentication

- **Axios** - HTTP client

- **Vite** - Build tool

### Backend

- **Express.js** - Server framework

- **MongoDB** - Database

- **Firebase Admin** - Server-side authentication

- **CORS** - Cross-origin requests

## 📁 Project Structure

```

Full-stack-react-linkedin/
├── back-end/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── front-end/
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── AddComentForm.jsx
│       ├── App.css
│       ├── App.jsx
│       ├── ArticlesList.jsx
│       ├── Layout.jsx
│       ├── Navbar.jsx
│       ├── articleContent.js
│       ├── assets/
│       │   └── react.svg
│       ├── firebase.js
│       ├── index.css
│       ├── main.jsx
│       ├── pages/
│       │   ├── AboutPage.jsx
│       │   ├── ArticlePage.jsx
│       │   ├── ArticlesListPage.jsx
│       │   ├── CommentsList.jsx
│       │   ├── CreateAccountPage.jsx
│       │   ├── HomePage.jsx
│       │   ├── LoginPage.jsx
│       │   └── NotFound.jsx
│       └── useUser.js
└── .gitignore

```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16+

- MongoDB Atlas account or local MongoDB

- Firebase project

### Installation

1\. **Clone the repository**

```bash

   git clone https://github.com/Vismaya-a/Full-stack-react-linkedin.git

```

2\. **Setup Backend**

```bash

   cd back-end

   npm install

```

3\. **Setup Frontend**

```bash

   cd ../front-end

   npm install

```

4\. **Environment Configuration**

   **Backend (.env)**

```env

   MONGODB_USERNAME=your_mongodb_username

   MONGODB_PASSWORD=your_mongodb_password

   PORT=8000

```

   **Frontend (.env)**

```env

   VITE_FIREBASE_API_KEY=your_firebase_api_key

   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com

   VITE_FIREBASE_PROJECT_ID=your_project_id

   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com

   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

   VITE_FIREBASE_APP_ID=your_app_id

   VITE_API_BASE_URL=http://localhost:8000

```

5\. **Firebase Setup**

   - Create a Firebase project

   - Enable Authentication (Email/Password)

   - Generate service account key and save as `credentials.json` in server folder

6\. **Run the Application**

   **Start Backend**

```bash

   cd back-end

   nodemon server.js

```

   **Start Frontend** (in new terminal)

```bash

   cd front-end

   npm run dev

```

7\. **Access the Application**

   - Frontend: http://localhost:5173

   - Backend API: http://localhost:8000

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/articles/:name` | Get article details | No |
| `POST` | `/api/articles/:name/upvote` | Upvote an article | Yes |
| `POST` | `/api/articles/:name/comments` | Add comment to article | Yes |

## 📚 Learning Objectives

This project helped me understand:

### Frontend Concepts

- ✅ React Router v6 with data loaders

- ✅ Firebase Authentication integration

- ✅ Custom hooks (useUser)

- ✅ Protected routes and conditional rendering

- ✅ Client-side state management

### Backend Concepts

- ✅ Express.js server setup

- ✅ MongoDB integration with native driver

- ✅ RESTful API design

- ✅ Firebase Admin SDK for server-side auth

- ✅ Middleware implementation

- ✅ CORS configuration

### Full-Stack Concepts

- ✅ JWT token verification

- ✅ Environment variable management

- ✅ Database relationship design

- ✅ API security best practices

- ✅ Error handling patterns

## 🎨 Components Overview



- **HomePage** - Landing page

- **ArticlesListPage** - Lists all articles

- **ArticlePage** - Individual article with upvotes and comments

- **LoginPage** - User authentication

- **CreateAccountPage** - User registration

- **AboutPage** - About section


- **Navbar** - Navigation with auth state

- **Layout** - App layout structure

- **ArticlesList** - Displays article previews

- **CommentsList** - Shows article comments

- **AddCommentForm** - Form to add new comments


- **useUser** - Manages user authentication state

## 🔒 Authentication Flow

1\. User registers/login via Firebase Auth

2\. Firebase ID token sent to backend via headers

3\. Backend verifies token using Firebase Admin

4\. Protected routes check authentication state

5\. User-specific actions (upvotes) tracked by UID

