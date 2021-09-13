import React from 'react';
import { useParams } from 'react-router-dom';
import { GameTypes } from '../../types/game-types';

type RouteParamsProps = {
  game: string;
};

const CreateGame = () => {
  let { game } = useParams<RouteParamsProps>();
  if (game === GameTypes.BLACKJACK) {
    return (
      <div>
        <h1>Blackjack page</h1>
      </div>
    );
  } else if (game === GameTypes.POKER) {
    return (
      <div>
        <h1>Poker page</h1>
      </div>
    );
  } else if (game === GameTypes.NINE) {
    return (
      <div>
        <h1>9Dian page</h1>
      </div>
    );
  }
};

export default CreateGame;
