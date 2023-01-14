import React from 'react';
import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/InputPlus';

import styles from './index.module.scss';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  const addTask = (title: string) => {
    if (title) {
      createTask(title);
    }
  };

  console.log(tasks);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputPlus onAdd={addTask} />
      </section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
