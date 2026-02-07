# Real-Time Chat Application (MERN Stack)

## Project Aim
The aim of this project is to develop a real-time chat application that enables users to communicate instantly over the web. The application is built using the MERN stack and WebSockets, and it provides functionality similar to popular chat platforms such as WhatsApp, Slack, and Microsoft Teams. The system supports secure authentication, real-time messaging, media sharing, and persistent chat history.

---

## Features

### User Authentication
- User registration and login functionality
- Passwords are securely encrypted using bcrypt
- Only authenticated users can access chat rooms

### Real-Time Messaging
- Messages are delivered instantly without page refresh
- Implemented using Socket.io for WebSocket-based communication

### Chat Rooms
- Users can join a common chat room (default: general)
- Previous messages are loaded when a user joins the room

### Media Sharing
- Users can upload and send images or files
- Uploaded files are stored on the server
- File URLs are saved in MongoDB and displayed in chat messages

### Message Persistence
- All chat messages are stored in MongoDB
- Chat history is available even after logout or page refresh

### Responsive Design
- Fully responsive user interface using Bootstrap and custom CSS
- Compatible with desktop, tablet, and mobile devices

---

## Technology Stack

Frontend: React, Bootstrap, CSS  
Backend: Node.js, Express.js  
Real-Time Communication: Socket.io  
Database: MongoDB  
Authentication: bcrypt  
File Uploads: Multer  
API Requests: Axios  

---

## Project Folder Structure

chat-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── messages.js
│   ├── uploads/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── ChatRoom.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
├── screenshots/
└── README.md

---

## Setup Instructions (Run Locally)

### Prerequisites
- Node.js version 22.x or later
- MongoDB Community Server
- npm package manager

---

## Backend Setup

1. Open terminal
2. Navigate to backend directory:
   cd chat-app/backend
3. Install dependencies:
   npm install
4. Ensure MongoDB service is running
5. Start backend server:
   npm start

Backend will run on:
http://localhost:5000

---

## Frontend Setup

1. Open a new terminal
2. Navigate to frontend directory:
   cd chat-app/frontend
3. Install dependencies:
   npm install
4. Start frontend application:
   npm start

Frontend will run on:
http://localhost:3000

---

## How to Use the Application

1. Open a web browser and navigate to http://localhost:3000
2. Register a new user account
3. Login using registered credentials
4. Join the default chat room (general)
5. Send text messages or upload images/files
6. Logout when finished

---

## Screenshots
The screenshots folder contains images of:
- Registration page
- Login page
- Chat room interface
- Sending messages
- Sending images/files

---

## Real-World Relevance
This project demonstrates the implementation of a real-time communication system using WebSockets, secure authentication, and persistent data storage. The application architecture and features are comparable to modern messaging platforms such as Slack, WhatsApp, and Microsoft Teams.

---

## Author
B. Namrata  
Department of Computer Science and Engineering  
Sreenidhi Institute of Science and Technology, Hyderabad

---

## Conclusion
This project successfully implements a real-time chat application using the MERN stack. It fulfills all core requirements including authentication, responsiveness, real-time messaging, media sharing, and message persistence.

---

End of README
