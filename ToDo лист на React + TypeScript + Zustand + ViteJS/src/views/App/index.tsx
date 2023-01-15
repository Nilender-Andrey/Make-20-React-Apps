import React from 'react';
import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';

import styles from './index.module.scss';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.firstSection}>
        <InputPlus onAdd={createTask} />
      </section>
      <section className={styles.secondSection}>
        {!tasks.length ? (
          <p className={styles.text}>There is on one task.</p>
        ) : (
          tasks.map((task) => (
            <InputTask
              id={task.id}
              title={task.title}
              onDone={removeTask}
              onEdited={updateTask}
              onRemoves={removeTask}
              key={task.id}
            />
          ))
        )}
      </section>
    </article>
  );
};
