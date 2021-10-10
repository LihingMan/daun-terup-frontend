import React from 'react';
import { useParams } from 'react-router-dom';
import { GameTypes } from '../../types/game-types';
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormButton,
  FormInput,
} from './CreateGameElements';

type RouteParamsProps = {
  game: string;
};

const CreateGame = () => {
  let { game } = useParams<RouteParamsProps>();

  return (
    <>
      <Container>
        <Icon to="/">daun-terup</Icon>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Choose a nickname</FormH1>
              <FormLabel htmlFor="for">Nickname</FormLabel>
              <FormInput type="nickname" required></FormInput>
              <FormButton type="submit">Create game</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
  // if (game === GameTypes.BLACKJACK) {
  //   return (
  //     <div>
  //       <h1>Blackjack page</h1>
  //     </div>
  //   );
  // } else if (game === GameTypes.POKER) {
  //   return (
  //     <div>
  //       <h1>Poker page</h1>
  //     </div>
  //   );
  // } else if (game === GameTypes.NINE) {
  //   return (
  //     <div>
  //       <h1>9Dian page</h1>
  //     </div>
  //   );
  // }
};

export default CreateGame;
