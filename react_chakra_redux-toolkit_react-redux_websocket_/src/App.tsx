import React from 'react';
import { Center } from '@chakra-ui/react';
import TimeContainer from './components/Timer/TimeContainer';
import './App.css';

export default function App() {
  return (
    <Center h="100vh" bg="green.400">
      <TimeContainer />
    </Center>
  );
}
