import React, { useEffect, useRef } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';
import useMovement from './useMovement';

import upImg from './img/XSA2Oom.gif';
import downImg from './img/JYUB0m3.png';
import rightImg from './img/GEXD7bk.gif';
import leftImg from './img/4LGAZ8t.gif';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgUrlRef = useRef('./img/JYUB0m3.png');

  const {
    x,
    y,
    direction,
    move,
  } = useMovement();

  // начальная загрузка
  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;

        const img = new Image();
        img.src = downImg;
        img.onload = () => context.drawImage(img, x, y);
      }
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        const img = new Image();

        let src;
        if (direction === 'up') src = upImg;
        if (direction === 'down') src = downImg;
        if (direction === 'left') src = leftImg;
        if (direction === 'right') src = rightImg;
        if (src) {
          img.src = src;
          if (src === imgUrlRef.current) {
            context.drawImage(img, x, y);
          } else {
            imgUrlRef.current = src;
            img.onload = () => context.drawImage(img, x, y);
          }
        }
      }
    }
  }, [x, y]);

  return (

    <div className="app">
      <canvas ref={canvasRef} />

      <ButtonGroup className="arrows">
        <Button className="button up" onClick={() => move('up')} type="button">Up</Button>
        <Button className="button left" onClick={() => move('left')} type="button">Left</Button>
        <Button className="button down" onClick={() => move('down')} type="button">Down</Button>
        <Button className="button right" onClick={() => move('right')} type="button">Right</Button>
      </ButtonGroup>

    </div>

  );
}
