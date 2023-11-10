import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleCategorySelect = (category) => {
    // Logic for filtering tasks based on category
    // ...
  };

  const handleTaskFormSubmit = (formData) => {
    const newTask = {
      id: tasks.length + 1,
      ...formData,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

