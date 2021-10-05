import React, { useEffect, useRef } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';
import useMovement from './useMovement';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linkUpRef = useRef<HTMLImageElement>(null);
  const linkDownRef = useRef<HTMLImageElement>(null);
  const linkLeftRef = useRef<HTMLImageElement>(null);
  const linkRightRef = useRef<HTMLImageElement>(null);

  const {
    x,
    y,
    direction,
    move,
  } = useMovement();

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;

        // context.fillRect(x, y, 100, 100); // рисует черный квадрат

        if (linkDownRef && linkDownRef.current) {
          context.drawImage(linkDownRef.current, 0, 0);
          // присваивает изображение стартовое
        }
      }
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        let theLinkRef;
        if (direction === 'up') theLinkRef = linkUpRef;
        if (direction === 'down') theLinkRef = linkDownRef;
        if (direction === 'left') theLinkRef = linkLeftRef;
        if (direction === 'right') theLinkRef = linkRightRef;

        if (theLinkRef && theLinkRef.current) {
          context.drawImage(theLinkRef.current, x, y);
        }

        // context.fillRect(x, y, 100, 100);
      }
    }
  }, [x, y]);

  return (

    <div role="none" className="app">
      <canvas ref={canvasRef} />

      <ButtonGroup className="arrows">
        <Button className="button up" onClick={() => move('up')} type="button">Up</Button>
        <Button className="button left" onClick={() => move('left')} type="button">Left</Button>
        <Button className="button down" onClick={() => move('down')} type="button">Down</Button>
        <Button className="button right" onClick={() => move('right')} type="button">Right</Button>
      </ButtonGroup>

      <div className="images">
        <img ref={linkDownRef} src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img ref={linkRightRef} src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img ref={linkLeftRef} src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>

  );
}
