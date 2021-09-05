import React from 'react';
import {
  Heading, Button, HStack, Flex, Text,
} from '@chakra-ui/react';

type TimerPropsType ={
  data:{ title: string;
    isRunning: boolean;
    minutes: string;
    seconds: string;
    resetTimet: () => void;
    startTimer: () => void;
    stopTimer: () => void;
  }

}

export default function Timer({ data }:TimerPropsType) {
  return (
    <Flex direction="column" maxW="400px" w="100%" minH="300px" p="20px" borderRadius="25px" justify="space-around" alignItems="center">
      <Heading as="h1" fontSize="24px" color="green.50" textAlign="center" h="50px">{data.title}</Heading>

      <HStack className="timer">
        <Text as="span" fontSize="80px" color="green.900">{data.minutes}</Text>

        <Text as="span" fontSize="8xl" fontWeight="bold" color="green.900">:</Text>

        <Text as="span" fontSize="80px" color="green.900">{data.seconds}</Text>
      </HStack>

      <HStack className="buttons" spacing="30px" justify="center">
        {data.isRunning
          ? <Button w="100px" fontSize="45px" bg="yellow.300" onClick={data.stopTimer}>Stop</Button>
          : <Button w="100px" fontSize="45px" bg="yellow.300" onClick={data.startTimer}>Start</Button>}

        <Button fontSize="45px" bg="yellow.300" onClick={data.resetTimet}>Reset</Button>
      </HStack>
    </Flex>
  );
}
