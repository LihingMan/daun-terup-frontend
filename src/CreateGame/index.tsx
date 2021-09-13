import React from 'react';
import { useParams } from 'react-router-dom';
import { GameTypes } from '../../types/game-types';

type RouteParamsProps = {
  game: string;
};

const CreateGame = () => {
  let { game } = useParams<RouteParamsProps>();
  if (game === GameTypes.BLACKJACK) {
    console.log(game);
  }

  return (
    <div>
      <h1>Blackjack page</h1>
    </div>
  );
};

export default CreateGame;
