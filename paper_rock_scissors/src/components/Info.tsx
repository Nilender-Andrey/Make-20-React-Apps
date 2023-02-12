import React from 'react';

type InfoPropsType = {
  wins:number;
  losses:number;
};

export default function Info(props: InfoPropsType): JSX.Element {
  return (
    <div className="info">
      <h2 className="title">Rock. Paper. Scissors</h2>

      <div className="wins-losses">
        <div className="wins">
          <span className="number">{props.wins}</span>
          <span className="text">{props.wins === 1 ? 'Win' : 'Wins'}</span>
        </div>

        <div className="losses">
          <span className="number">{props.losses}</span>
          <span className="text">
            {props.losses === 1 && 'Loss'}
            {props.losses !== 1 && 'Losses'}
          </span>
        </div>
      </div>
    </div>
  );
}
