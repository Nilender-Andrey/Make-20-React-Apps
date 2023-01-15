import { FC, useCallback, useState } from 'react';

import styles from './index.module.scss';

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: FC<InputPlusProps> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const addTask = () => {
    onAdd(value);
    setValue('');
  };

  return (
    <div className={styles.inputPlus}>
      <input
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            addTask();
          }
        }}
        type='text'
        placeholder='Type here...'
      />
      <button className={styles.button} onClick={addTask} aria-label='Add' />
    </div>
  );
};
