import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
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
import ServerConfig from "../../config/server.config";
import {
  CreateGamePayload,
  CreateGameResponse,
} from "../../types/create-game-types";

interface CreateGameParams {
  game: string;
}

const CreateGame = () => {
  const { game } = useParams<CreateGameParams>();

  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const create = async (nickname: string) => {
    const payload: CreateGamePayload = {
      nickname: nickname,
      game: game,
    };

    const response: any | CreateGameResponse = await axios
      .post(`${ServerConfig.getBackendUrl()}/create-game/`, payload)
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        // do something with the error
        console.log(error);
      });

    return response;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await create(nickname);
    history.push(`/games/${response.roomId}`);
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
