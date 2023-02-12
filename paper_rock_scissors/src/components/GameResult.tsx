import React from 'react';
import { userChoiceType } from '../App';
import renderComponent from '../helper/renderComponent';

type GameResultType = {
  gameState: string | null;
  userChoice: userChoiceType | null;
  computerChoice: userChoiceType | null;
  restartGame: () => void;
};

export default function GameResult(props: GameResultType): JSX.Element {
  return (
    <div className="game-state">
      <div className="game-state__wrap">
        <div className={`game-state-content ${props.gameState}`}>
          <div className="game-state-content__icon">
            {renderComponent(props.userChoice)}
          </div>
          <p>{`you ${props.gameState}!`}</p>
          <div className="game-state-content__icon">
            {renderComponent(props.computerChoice)}
          </div>
        </div>

        <button
          className="restartGame"
          type="button"
          onClick={props.restartGame}
        >
          Play Again
        </button>

      </div>
    </div>
  );
}
