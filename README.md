# 🚀 MERN Stack CRUD Application

A basic full-stack MERN (MongoDB, Express, React, Node.js) application built to understand core backend and frontend integration.

This project demonstrates CRUD operations, REST API design, and image upload functionality using a cloud storage service.

---

##  Features

* Create, Read, Update, Delete (CRUD) posts
* RESTful API using Express.js
* MongoDB database integration (Mongoose)
* Image upload (ImageKit / Cloud storage)
* React frontend with routing
* Form handling and API integration using Axios

---

##  Tech Stack

**Frontend**

* React.js
* React Router
* Axios

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

**Other Tools**

* Multer (file upload)
* ImageKit (image storage)
* Dotenv (environment variables)

---

##  Project Structure

```
project-root/
│
├── client/        # React frontend
├── server/        # Express backend
├── models/        # Mongoose schemas
├── routes/        # API routes
└── services/      # Image upload logic
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Install dependencies

#### Backend

```
cd server
npm install
```

#### Frontend

```
cd client
npm install
```

---

### 3. Environment Variables

Create a `.env` file in the backend folder:

```
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

### 4. Run the project

#### Start backend

```
npm run dev
```

#### Start frontend

```
npm run dev
```

---

##  API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | /posts       | Get all posts     |
| POST   | /create-post | Create a new post |
| PATCH  | /posts/:id   | Update a post     |
| DELETE | /posts/:id   | Delete a post     |

---

##  Future Improvements

* User authentication (JWT)
* Like & comment system
* Better UI/UX design
* Image preview before upload
* Pagination for posts

---

##  Learning Outcome

This project helped in understanding:

* Full-stack data flow
* REST API design
* File uploads and cloud storage
* MongoDB operations with Mongoose
* Debugging real-world backend issues

---

##  Acknowledgement

Built as part of learning full-stack development using MERN stack.

