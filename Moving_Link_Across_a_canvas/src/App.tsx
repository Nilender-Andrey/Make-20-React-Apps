import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;

        context.fillRect(x, y, 100, 100);
      }
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.clearRect(0, 0, window.innerHeight, window.innerWidth);
        context.fillRect(x, y, 100, 100);
      }
    }
  }, [x, y]);

  return (

    <div className="app">
      <canvas ref={canvasRef} />

      <ButtonGroup className="arrows">
        <Button className="button up" onClick={() => setY((e) => e - 20)} type="button">Up</Button>
        <Button className="button" onClick={() => setX((e) => e - 20)} type="button">Left</Button>
        <Button className="button" onClick={() => setY((e) => e + 20)} type="button">Down</Button>
        <Button className="button" onClick={() => setX((e) => e + 20)} type="button">Right</Button>
      </ButtonGroup>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>

  );
}
