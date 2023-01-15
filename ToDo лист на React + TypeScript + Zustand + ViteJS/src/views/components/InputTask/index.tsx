import { FC, useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

interface InputTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoves: (id: string) => void;
}

export const InputTask: FC<InputTaskProps> = ({ id, title, onDone, onEdited, onRemoves }) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditMode) {
      editTitleInputRef.current?.focus();
    }
  }, [isEditMode]);

  return (
    <div className={styles.inputTask}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          disabled={isEditMode}
        />
        {isEditMode ? (
          <input
            className={styles.input}
            ref={editTitleInputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onEdited(id, value);
                setIsEditMode(false);
              }
            }}
            type='text'
          />
        ) : (
          <h3 className={`${checked ? styles.textDone : ''}`}>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          className={styles.saveButton}
          aria-label='Save'
          onClick={() => {
            onEdited(id, value);
            setIsEditMode(false);
          }}
        />
      ) : (
        <button
          className={styles.editButton}
          aria-label='Edit'
          onClick={() => setIsEditMode((prevState) => !prevState)}
        />
      )}

      <button
        className={styles.removeButton}
        aria-label='Remove'
        onClick={() => {
          if (confirm('Are you sure?')) {
            onRemoves(id);
          }
        }}
      />
    </div>
  );
};
