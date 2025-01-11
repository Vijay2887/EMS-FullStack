# Employee Management System (EMS)

## Overview
The Employee Management System (EMS) is a full-stack application that streamlines employee task management. This system enables efficient handling of employee-related data, such as task assignments and progress tracking, while providing separate dashboards for admins and employees.

## Features
- **Authentication System**: Secure login for both admins and employees.
- **Admin Dashboard**:
  - Assign new tasks to employees.
  - View and manage active, completed, and failed tasks.
- **Employee Dashboard**:
  - View assigned tasks.
  - Update task status (completed/failed).
- **Task Management**: A centralized task list with filters for active, completed, and failed tasks.

## Tech Stack
### Frontend
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **State Management**: Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB

---

## Project Structure

### Frontend
```
EmployeeMgmtSystem React/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboards/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── EmployeeDashboard.jsx
│   │   ├── Reusabilities/
│   │   │   ├── AllTasks.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskNumber.jsx
│   │   ├── TaskComponents/
│   │       ├── ActiveComponent.jsx
│   │       ├── CompletedComponent.jsx
│   │       ├── FailedComponent.jsx
│   │       ├── NewTaskComponent.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── Helpers/
│   │   ├── handleLogin.js
│   │   ├── handleLogout.js
│   │   ├── updateEmployeeTasks.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── tailwind.config.js
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md
```

### Backend
```
EMS Backend/
├── node_modules/
├── src/
│   ├── database/
│   └── index.mjs
├── .gitignore
├── package.json
├── package-lock.json
```

---

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB

### Steps
#### Clone the Repository
```bash
git clone https://github.com/Vijay2887/EMS-FullStack.git
cd EMS-FullStack
```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd EmployeeMgmtSystem React\employee-mgmt-system
   ```
2. Navigate to the backend directory:
   ```bash
   cd EMS backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd EMS Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the database connection in `src/database`.
4. Start the backend server:
   ```bash
   node src/index.mjs
   ```

---

## Usage
- Open the frontend in your browser at `http://localhost:5173`.
- The backend runs at `http://localhost:3000` (default ports).

---

## Contributing
Contributions are welcome! Please fork this repository and create a pull request for any feature additions or bug fixes.

---

