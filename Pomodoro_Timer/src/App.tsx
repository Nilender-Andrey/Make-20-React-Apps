import {
  Heading, Button, HStack, Flex, Center, Text,
} from '@chakra-ui/react';
import './App.css';
import React, { useRef, useState } from 'react';
import padTime from './helper/padTime';

export default function App() {
  const [title, setTitle] = useState('Let the countdown begin!!!');
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef< NodeJS.Timeout | null>(null); // : NodeJS.Timeout | null = null;

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - +minutes * 60);

  const resetTimet = () => {
    if (intervalRef.current === null) return;

    if (intervalRef.current) { clearInterval(intervalRef.current); }
    setTitle('Ready to go anothew round?');
    intervalRef.current = null;
    setTimeLeft(10);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (intervalRef.current != null) return;
    setIsRunning(true);
    setTitle('You\'re doing great!');
    intervalRef.current = setInterval(() => {
      setTimeLeft((tL) => {
        if (tL > +1) return tL - 1;
        if (intervalRef.current) { clearInterval(intervalRef.current); }
        resetTimet();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return;
    if (intervalRef.current) { clearInterval(intervalRef.current); }
    setIsRunning(false);
    setTitle('Keep it up!');
    intervalRef.current = null;
  };

  return (
    <Center h="100vh" bg="green.400">
      <Flex direction="column" maxW="400px" w="100%" minH="300px" p="20px" borderRadius="25px" justify="space-around" alignItems="center">
        <Heading as="h1" fontSize="40px" color="green.50" textAlign="center" h="100px">{title}</Heading>

        <HStack className="timer">
          <Text as="span" fontSize="150px" color="green.900">{minutes}</Text>

          <Text as="span" fontSize="8xl" fontWeight="bold" color="green.900">:</Text>

          <Text as="span" fontSize="150px" color="green.900">{seconds}</Text>
        </HStack>

        <HStack className="buttons" spacing="30px" justify="center">
          {isRunning
            ? <Button w="100px" fontSize="45px" bg="yellow.300" onClick={stopTimer}>Stop</Button>
            : <Button w="100px" fontSize="45px" bg="yellow.300" onClick={startTimer}>Start</Button>}

          <Button fontSize="45px" bg="yellow.300" onClick={resetTimet}>Reset</Button>
        </HStack>
      </Flex>
    </Center>
  );
}
