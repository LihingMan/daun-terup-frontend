import React from "react";
import { useParams } from "react-router-dom";
import { GameTypes } from "src/types/game-types";
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
} from "./CreateGameElements";
import axios from "axios";
import * as rax from "retry-axios";
import ServerConfig from "../config/server.config";

const retriableAxios = axios.create();
rax.attach(retriableAxios);

type RouteParamsProps = {
  game: string;
};

const CreateGame = () => {
  let { game } = useParams<RouteParamsProps>();

  const createGame = async (nickname: string) => {
    const payload = { nickname: nickname };
    retriableAxios
      .post(`${ServerConfig.getBackendUrl}/create-game`, payload)
      .then(async (res) => {
        console.log(res);
      });
  };

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
};

export default CreateGame;
