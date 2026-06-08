import { useState } from "react";
import "./App.css";
import type { Task } from "./types";

function App() {
  const INITIAL_TASKS: Task[] = [
    {
      id: "task-1",
      title: "Config Tailwind and Shadcn",
      isCompleted: false,
      priority: "high",
      tags: ["setup", "frontend"],
      category: {
        id: "cat-dev",
        name: "Development",
        color: "#3b82f6",
      },
    },
    {
      id: "task-1",
      title: "Plan the development process and tech to use",
      isCompleted: true,
      priority: "medium",
      tags: ["planning", "architecture"],
      category: {
        id: "cat-plan",
        name: "Planning",
        color: "#10b981",
      },
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  return (
    <>
      <h1>Tasks:</h1>
      {tasks.map((task) => (
        <div key={task.id} className="task-card" style={{border: '1px solid', margin: 10, padding: 10}}>
          <h2>{task.title}</h2>
          <span
            style={{ backgroundColor: task.category.color, color: "black" }}
          >
            {task.category.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default App;
