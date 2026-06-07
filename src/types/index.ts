export interface Category {
    id: string;
    name: string;
    color: string;
}

export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
    priority: "low" | "medium" | "high";
    tags: string[];
    category: Category;
}

