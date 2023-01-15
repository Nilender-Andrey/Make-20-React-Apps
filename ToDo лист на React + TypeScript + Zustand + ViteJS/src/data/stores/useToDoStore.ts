import { create, State, StateCreator, StoreMutatorIdentifier } from 'zustand';
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

type localStorageUpdateType = <T extends TodoStore>(
  f: StateCreator<T, [], []>,
) => StateCreator<T, [], []>;

const localStorageUpdate: localStorageUpdateType = (f) => (set, get, store) => {
  const newSet: typeof set = (...a) => {
    set(...a);

    window.localStorage.setItem('tasks', JSON.stringify(get().tasks));
  };
  store.setState = newSet;

  return f(newSet, get, store);
};

function getCurrentState() {
  try {
    return JSON.parse(window.localStorage.getItem('tasks') || '[]');
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const useToDoStore = create<TodoStore>()(
  localStorageUpdate((set, get) => ({
    tasks: getCurrentState(),

    createTask: (title) => {
      if (title) {
        const { tasks } = get();
        const newTask = { id: generateId(), title, createdAt: Date.now() };

        set({
          tasks: [newTask, ...tasks],
        });
      }
    },

    updateTask: (id, title) => {
      if (title) {
        const { tasks } = get();

        set({
          tasks: tasks.map((task) => ({
            ...task,
            title: task.id === id ? title : task.title,
          })),
        });
      }
    },

    removeTask: (id) => {
      const { tasks } = get();

      set({
        tasks: tasks.filter((task) => task.id !== id),
      });
    },
  })),
);
