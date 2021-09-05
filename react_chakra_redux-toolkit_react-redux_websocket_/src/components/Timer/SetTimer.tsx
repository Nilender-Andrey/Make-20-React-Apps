import React from 'react';
import {
  Heading, Button, Input, Flex, Center,
} from '@chakra-ui/react';
import padTime from '../../helper/padTime';

type SetTimerPropsType = {
  data: {
    min: number;
    sec: number;
    isRunning: boolean;
    setValue: () => void;
    handleSetMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSetSec: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
};

export default function SetTimer({ data }: SetTimerPropsType) {
  return (
    <Flex
      direction="column"
      maxW="400px"
      w="100%"
      minH="300px"
      p="20px"
      borderRadius="25px"
      justify="space-around"
      alignItems="center"
    >
      <Heading
        as="h1"
        fontSize="24px"
        color="green.50"
        textAlign="center"
        h="50px"
      >
        {data.isRunning ? 'Stop timer first' : 'Set values'}
      </Heading>
      <Flex alignItems="center" h="90px">
        <Input
          type="number"
          onChange={data.handleSetMin}
          value={padTime(data.min)}
          max="99"
          min="0"
          fontSize="80px"
          h="90px"
          w="110px"
          p="10px"
          textAlign="center"
        />

        <Center w="30px" h="90px" fontSize="8xl" fontWeight="bold" color="green.900">:</Center>

        <Input
          type="number"
          onChange={data.handleSetSec}
          value={padTime(data.sec)}
          max="99"
          min="0"
          fontSize="80px"
          h="90px"
          w="110px"
          p="10px"
          textAlign="center"
        />
      </Flex>
      <Button fontSize="45px" bg="yellow.300" onClick={data.setValue}>
        Set value
      </Button>
    </Flex>
  );
}
