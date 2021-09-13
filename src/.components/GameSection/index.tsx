import React from 'react';
import {
  GameSectionContainer,
  GameSectionH1,
  GameSectionWrapper,
  GameSectionCard,
  GameSectionIcon,
  GameSectionH2,
  GameSectionP,
} from './GameSectionElements';
import { Link } from 'react-router-dom';
import { GameTypes } from '../../../types/game-types';
import Icon1 from '../../../assets/landing/playingcards.svg';
import Icon2 from '../../../assets/landing/playingcards.svg';
import Icon3 from '../../../assets/landing/playingcards.svg';

const GameSection = () => {
  return (
    <GameSectionContainer id={'games'}>
      <GameSectionH1>Games</GameSectionH1>
      <GameSectionWrapper>
        <Link to={`create-game/${GameTypes.BLACKJACK}`}>
          <GameSectionCard>
            {/* <GameSectionIcon src={Icon1} /> */}
            <GameSectionH2>Blackjack</GameSectionH2>
            <GameSectionP>Coming soon</GameSectionP>
          </GameSectionCard>
        </Link>

        <Link to={`create-game/${GameTypes.POKER}`}>
          <GameSectionCard>
            {/* <GameSectionIcon src={Icon2} /> */}
            <GameSectionH2>Poker</GameSectionH2>
            <GameSectionP>Coming soon</GameSectionP>
          </GameSectionCard>
        </Link>

        <Link to={`create-game/${GameTypes.NINE}`}>
          <GameSectionCard>
            {/* <GameSectionIcon src={Icon3} /> */}
            <GameSectionH2>9Dian</GameSectionH2>
            <GameSectionP>Coming soon</GameSectionP>
          </GameSectionCard>
        </Link>
      </GameSectionWrapper>
    </GameSectionContainer>
  );
};

export default GameSection;
