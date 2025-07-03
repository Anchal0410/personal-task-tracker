# Personal Task Tracker

## 📖 Description
A simple and intuitive personal task management application built with React+Vite. This app allows users to create, edit, delete, and organize their tasks with a clean, responsive interface.

## Deployed Link

![{85FA93EA-3ABF-4A49-8100-28AE13B5A9F5}](https://github.com/user-attachments/assets/e55cf454-a4a7-49ea-a2d1-7874df3bc383)


https://tracker-six-phi.vercel.app/


## 🚀 Features
- **Simple Login System**: Username-based authentication with localStorage
- **Task Management**: Add, edit, delete, and mark tasks as complete
- **Task Filtering**: Filter tasks by All, Completed, or Pending status
- **Data Persistence**: Tasks are saved to localStorage and persist across sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Task counts update automatically
- **Confirmation Dialogs**: Safe deletion with confirmation prompts
- **Date Tracking**: Display creation date and time for each task

## 🛠 Setup Instructions
1. Clone the repository
   ```bash
   git clone [your-repository-url]
   cd personal-task-tracker

Install dependencies
bashnpm install

Start the development server
bashnpm start

Open http://localhost:5173 in your browser

🧰 Technologies Used

React.js (Functional Components & Hooks)
CSS3 (Responsive Design)
LocalStorage API
HTML5

🔗 Live Demo
[Add your deployed application URL here]
🖼 Screenshots
[Add screenshots of your application here]
📱 Features Implemented

✅ Simple login with username storage
✅ Add tasks with title (required) and description (optional)
✅ Edit tasks inline
✅ Delete tasks with confirmation
✅ Toggle task completion status
✅ Filter tasks (All/Completed/Pending)
✅ Task count display
✅ Data persistence with localStorage
✅ Responsive design
✅ Clean component structure
✅ Creation date display

🏗 Project Structure
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── TaskForm.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   └── TaskFilter.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── README.md
└── package.json
🎯 Usage

Enter your username to log in
Add new tasks using the form at the top
Use the filter buttons to view All, Completed, or Pending tasks
Click the checkbox to mark tasks as complete
Edit tasks by clicking the "Edit" button
Delete tasks with the "Delete" button (confirmation required)
Use the "Logout" button to switch users

🔒 Data Storage

All tasks are stored in the browser's localStorage
Username is remembered between sessions
Data persists after page refresh
No external database required


## 🚀 Deployment Commands

✅ Testing Checklist

 Login functionality works
 Tasks can be added with title only
 Tasks can be added with title and description
 Tasks can be edited
 Tasks can be deleted with confirmation
 Task completion can be toggled
 Filters work correctly (All/Completed/Pending)
 Task counts are accurate
 Data persists after refresh
 Responsive design works on mobile
 Logout functionality works
 App works in deployed environment

This implementation follows every requirement from the assignment document and provides a complete, functional task tracker application.
