import React from "react";
import io from "socket.io-client";
import ServerConfig from "src/config/server.config";
import { useParams } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";

const socket = io(`${ServerConfig.getBackendUrl()}/game`);

socket.on("connect", () => {
  console.log("connected");
});

socket.on("message", (message) => {
  console.log(message);
});

interface GameRoomParams {
  roomId: string;
}

const GameRoom = () => {
  const { roomId } = useParams<GameRoomParams>();
  const userId = useSelector((state: RootStateOrAny) => state.UserId.userId);

  const connectToRoom = (roomId: string) => {
    try {
      // TODO:
      // 1. need to return playerId in create-game api
      // 2. need to try use redux to store the playerId
      // 3. retrieve playerId from redux store here and connect to websocket
      socket.emit("joinGame", { playerId: userId, roomId: roomId });
    } catch (error) {
      console.log(error);
    }
  };
  connectToRoom(roomId);

  return <h1>Deez</h1>;
};

export default GameRoom;
