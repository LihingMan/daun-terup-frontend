import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
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
import io from "socket.io-client";

const socket = io(`${ServerConfig.getBackendUrl()}/games`);

const retriableAxios = axios.create();
rax.attach(retriableAxios);

type RouteParamsProps = {
  game: string;
};

const CreateGame = () => {
  const { game } = useParams<RouteParamsProps>();

  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const createGame = async (nickname: string) => {
    const payload = {
      nickname: nickname,
      game: game,
    };

    retriableAxios
      .post(`${ServerConfig.getBackendUrl()}/create-game/`, payload)
      .then(async (res) => {
        // history.push(`/${game}/room-id`);
        try {
          socket.emit("joinGame", { playerId: "player1", roomId: "room1" });
        } catch {
          // retry connection
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createGame(nickname);
  };

  return (
    <>
      <Container>
        <Icon to="/">daun-terup</Icon>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Choose a nickname</FormH1>
              <FormLabel htmlFor="for">Nickname</FormLabel>
              <FormInput
                type="nickname"
                onChange={(e) => setNickname(e.target.value)}
                required
              ></FormInput>
              <FormButton type="submit">Create game</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default CreateGame;
