import { useState, useEffect } from "react";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import {
  loadTasks,
  saveTasks,
  getUsername,
  removeUsername,
} from "./utils/localStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedUsername = getUsername();
    if (savedUsername) {
      setUsername(savedUsername);
      setIsLoggedIn(true);
      const savedTasks = loadTasks();
      setTasks(savedTasks);
    }
  }, []);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  };

  const handleLogout = () => {
    removeUsername();
    setIsLoggedIn(false);
    setUsername("");
    setTasks([]);
  };

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTask = (id, updates) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updates } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    }
  };

  const toggleComplete = (id) => {
    updateTask(id, {
      completed: !tasks.find((task) => task.id === id).completed,
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Task Tracker</h1>
        <div className="user-info">
          <span>Welcome, {username}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <main className="app-main">
        <TaskForm onAddTask={addTask} />
        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          taskCounts={taskCounts}
        />
        <TaskList
          tasks={filteredTasks}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
}

export default App;
