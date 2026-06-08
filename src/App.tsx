import { useState } from "react";
import "./App.css";
import type { Task } from "./types";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./components/ui/badge";

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
      id: "task-2",
      title: "Plan the development process and tech to use",
      isCompleted: true,
      priority: "medium",
      tags: ["architecture"],
      category: {
        id: "cat-plan",
        name: "Development",
        color: "#10b981",
      },
    },
    {
      id: "task-3",
      title: "Watch new Recrent video",
      isCompleted: false,
      priority: "low",
      tags: ["youtube"],
      category: {
        id: "cat-plan",
        name: "entertainment",
        color: "#10b981",
      },
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const priorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "ghost";
    }
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <h1 className="mt-5 text-center text-4xl font-extrabold tracking-tight text-balance">
          Tasks
        </h1>
        {tasks.map((task) => (
          <Card key={task.id} className="mx-auto w-full max-w-sm my-4">
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>{task.tags.join(", ")}</CardDescription>
            </CardHeader>
            <CardFooter>
              Priority:
              <Badge variant={priorityColor(task.priority)} className="ml-2">
                {task.priority}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </>
    </ThemeProvider>
  );
}

export default App;
