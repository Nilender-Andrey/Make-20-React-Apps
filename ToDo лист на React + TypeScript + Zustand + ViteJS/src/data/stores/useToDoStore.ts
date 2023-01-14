import { create } from 'zustand';
import { generateId } from '../helpers';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface TodoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<TodoStore>((set, get) => ({
  tasks: [],

  createTask: (title) => {
    const { tasks } = get();
    const newTask = { id: generateId(), title, createdAt: Date.now() };

    set({
      tasks: [newTask, ...tasks],
    });
  },

  updateTask: (id, title) => {
    const { tasks } = get();

    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title,
      })),
    });
  },

  removeTask: (id) => {
    const { tasks } = get();

    set({
      tasks: tasks.filter((task) => task.id !== id),
    });
  },
}));
