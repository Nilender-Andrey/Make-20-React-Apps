import {
  Heading, Button, HStack, Flex, Center, Text,
} from '@chakra-ui/react';
import './App.css';
import React from 'react';

export default function App() {
  return (
    <Center h="100vh" bg="green.400">
      <Flex direction="column" maxW="400px" w="100%" minH="300px" p="20px" borderRadius="25px" justify="space-around" alignItems="center">
        <Heading as="h1" fontSize="45px" color="green.50">Pomodoro!</Heading>

        <HStack className="timer">
          <Text as="span" fontSize="150px" color="green.900">00</Text>

          <Text as="span" fontSize="8xl" fontWeight="bold" color="green.900">:</Text>

          <Text as="span" fontSize="150px" color="green.900">00</Text>
        </HStack>

        <HStack className="buttons" spacing="30px" justify="center">
          <Button fontSize="45px" bg="yellow.300" p="20px">Start</Button>
          <Button fontSize="45px" bg="yellow.300">Stop</Button>
          <Button fontSize="45px" bg="yellow.300">Reset</Button>
        </HStack>
      </Flex>
    </Center>
  );
}
