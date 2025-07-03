const TASKS_KEY = 'taskTracker_tasks';
const USERNAME_KEY = 'taskTracker_username';

export const loadTasks = () => {
  try {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

export const saveUsername = (username) => {
  try {
    localStorage.setItem(USERNAME_KEY, username);
  } catch (error) {
    console.error('Error saving username:', error);
  }
};

export const getUsername = () => {
  try {
    return localStorage.getItem(USERNAME_KEY);
  } catch (error) {
    console.error('Error getting username:', error);
    return null;
  }
};

export const removeUsername = () => {
  try {
    localStorage.removeItem(USERNAME_KEY);
  } catch (error) {
    console.error('Error removing username:', error);
  }
};