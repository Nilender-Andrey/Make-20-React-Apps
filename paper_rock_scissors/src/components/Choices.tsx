import React from 'react';
import { userChoiceType } from '../App';
import Paper from './Paper';
import Rock from './Rock';
import Scissors from './Scissors';

type ChoicesPropsType = {
  computerChoice: userChoiceType | null;
  choices: {
    id: number;
    name: string;
    component: () => JSX.Element;
    losesTo: number;
  }[];
  setUserChoice: React.Dispatch<React.SetStateAction<userChoiceType | null>>;
  setLosses: React.Dispatch<React.SetStateAction<number>>;
  setGameState: React.Dispatch<React.SetStateAction<string | null>>;
  setWins: React.Dispatch<React.SetStateAction<number>>;
};

export default function Choices(props: ChoicesPropsType): JSX.Element {
  function handleUserChoice(choice: number) {
    const chosenChoice = props.choices.find((item) => item.id === choice);
    if (chosenChoice) props.setUserChoice(chosenChoice);

    if (chosenChoice?.losesTo === props.computerChoice?.id) {
      props.setLosses((l) => l + 1);
      props.setGameState('lose');
    } else if (props.computerChoice?.losesTo === chosenChoice?.id) {
      props.setWins((w) => w + 1);
      props.setGameState('win');
    } else if (props.computerChoice?.id === chosenChoice?.id) {
      props.setGameState('draw');
    }
  }

  return (
    <div className="choices">
      <div className="choices__title">
        <p className="you__title">You</p>
        <p className="computer__title">Computer</p>
      </div>

      <div className="choices-wrap">
        <div className="you">
          <button
            type="button"
            className="rock btn-game"
            onClick={() => handleUserChoice(1)}
          >
            <Rock />
          </button>

          <button
            type="button"
            className="paper btn-game"
            onClick={() => handleUserChoice(2)}
          >
            <Paper />
          </button>

          <button
            type="button"
            className="scissors btn-game"
            onClick={() => handleUserChoice(3)}
          >
            <Scissors />
          </button>
        </div>

        <div className="vs">VS</div>

        <div className="computer">
          <button type="button" className="computer__btn">
            ?
          </button>
        </div>
      </div>
    </div>
  );
}
