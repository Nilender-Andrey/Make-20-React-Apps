import React, { useEffect, useState } from 'react';

import './App.css';
import Choices from './components/Choices';
import GameResult from './components/GameResult';
import Info from './components/Info';
import Paper from './components/Paper';
import Rock from './components/Rock';
import Scissors from './components/Scissors';

import randomInt from './helper/randomInt';

const choices = [
  {
    id: 1,
    name: 'rock',
    component: Rock,
    losesTo: 2,
  },
  {
    id: 2,
    name: 'paper',
    component: Paper,
    losesTo: 3,
  },
  {
    id: 3,
    name: 'scissors',
    component: Scissors,
    losesTo: 1,
  },
];

export type userChoiceType = {
  id: number;
  name: string;
  component: () => JSX.Element;
  losesTo: number;
};

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState<null | userChoiceType>(null);
  const [computerChoice, setComputerChoice] = useState<null | userChoiceType>(
    null,
  ); // win, lose, draw
  const [gameState, setGameState] = useState<null | string>(null);

  const restartGame = () => {
    const randomChoice = choices[randomInt(choices.length - 1)];
    setComputerChoice(randomChoice);
    setUserChoice(null);
    setGameState(null);
  };

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className="app">
      <Info wins={wins} losses={losses} />

      {gameState && (
        <GameResult
          gameState={gameState}
          userChoice={userChoice}
          computerChoice={computerChoice}
          restartGame={restartGame}
        />
      )}

      <Choices
        computerChoice={computerChoice}
        choices={choices}
        setUserChoice={setUserChoice}
        setLosses={setLosses}
        setGameState={setGameState}
        setWins={setWins}
      />
    </div>
  );
}
