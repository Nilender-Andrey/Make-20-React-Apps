import { useEffect, useState } from 'react';

const STEP = 5;

export default function useMovement() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('down');

  function move(dir: string) {
    setDirection(dir);

    switch (dir) {
      case 'up':
        setY((k) => (k - STEP < 0 ? k : k - STEP));
        break;
      case 'down':
        setY((k) => (k + STEP > window.innerHeight - 25 ? k : k + STEP));
        break;
      case 'left':
        setX((k) => (k - 10 < 0 ? k : k - STEP));
        break;
      case 'right':
        setX((k) => (k + STEP > window.innerWidth - 25 ? k : k + STEP));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'ArrowUp') move('up');
      if (e.code === 'ArrowDown') move('down');
      if (e.code === 'ArrowLeft') move('left');
      if (e.code === 'ArrowRight') move('right');
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    x,
    y,
    direction,
    move,
  };
}
