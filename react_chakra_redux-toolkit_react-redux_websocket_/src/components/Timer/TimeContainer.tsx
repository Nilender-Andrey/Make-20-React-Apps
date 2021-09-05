import React, { useRef, useState } from 'react';
import Timer from './Timer';
import padTime from '../../helper/padTime';
import SetTimer from './SetTimer';

export default function TimeContainer() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(10);

  const [title, setTitle] = useState('Let the countdown begin!!!');
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // : NodeJS.Timeout | null = null;
  const defaultTime = useRef(0);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - +minutes * 60);

  const resetTimet = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTitle('Ready to go anothew round?');
    intervalRef.current = null;
    setTimeLeft(defaultTime.current);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (intervalRef.current != null) return;

    setIsRunning(true);
    setTitle("You're doing great!");
    intervalRef.current = setInterval(() => {
      setTimeLeft((tL) => {
        if (tL > +1) return tL - 1;

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        resetTimet();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    setTitle('Keep it up!');
    intervalRef.current = null;
  };

  function setValue() {
    if (isRunning) return;
    defaultTime.current = min * 60 + sec;
    setTimeLeft(defaultTime.current);
  }

  function handleSetMin(e:React.ChangeEvent<HTMLInputElement>) {
    let num = +e.target.value;
    if (num < 0)num = 0;
    if (num > 99) num = 99;

    setMin(num);
  }

  function handleSetSec(e:React.ChangeEvent<HTMLInputElement>) {
    let num = +e.target.value;
    if (num < 0)num = 0;
    if (num > 99) num = 99;

    setSec(num);
  }

  const dataForTimer = {
    title,
    isRunning,
    minutes,
    seconds,
    resetTimet,
    startTimer,
    stopTimer,
  };

  const dataForSetTimer = {
    min,
    sec,
    isRunning,
    setValue,
    handleSetMin,
    handleSetSec,
  };

  return (
    <div>
      <SetTimer data={dataForSetTimer} />
      <Timer data={dataForTimer} />
    </div>
  );
}
