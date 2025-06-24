# 🛒 Shopping List – Assignment

The **Shopping List** project is a full-stack web application for managing a shopping list, including a responsive client built with React and a backend server using Node.js and SQL Server. The project leverages Redux Toolkit for state management, full RTL (Hebrew) support, and a clean user experience.

---

## 🚀 Technologies Used

### Client (Frontend)

- **React** with **TypeScript**
- **Vite** (for fast development and build)
- **Material UI** with full **RTL support** (Hebrew)
- **Redux Toolkit** for global state management (shopping cart)
- Responsive design for both desktop and mobile

### Server (Backend)

- **Node.js** with **TypeScript**
- **Express.js**
- **Sequelize ORM**
- **SQL Server** (via Docker container)
- Automatic database creation on first run

### DevOps

- Docker + Docker Compose
- Nginx for serving the frontend
- Fully containerized development environment

---

## 🧪 Main Features

- ✅ Product name input field
- ✅ Category selection from a dynamic list
- ✅ "Add" button to insert items into the cart
- ✅ Cart displays product name, category, and quantity
- ✅ Summary section at the top (`Total Items`)
- ✅ "Submit Order" button that sends the cart to the server
- ✅ Categories are fetched from the backend on startup
- ✅ Data is persisted in the SQL Server database

---

## ⚙️ Local Setup

> 🐳 **Note:** Make sure [Docker](https://www.docker.com/products/docker-desktop) is installed and running on your machine before starting the project.

### 🛠️ Run the full project:

- 🔗 Access after running:
- 🌐 Frontend available at: http://localhost:5173
- 🛠️ Backend server running at: http://localhost:3001
- 🗄️ SQL Server running inside Docker on port: 1433


```bash
git clone https://github.com/123zb123/Shopping-list.git
cd Shopping-list
docker-compose up --build