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
      // 1. if userId retrieved from redux store is null, then make the user create a nickname and join the game
      // 2. connect to the backend to create a user
      // 3. with the userId returned, join the user to the websocket
      socket.emit("joinGame", { playerId: userId, roomId: roomId });
    } catch (error) {
      console.log(error);
    }
  };
  connectToRoom(roomId);

  return <h1>Deez</h1>;
};

export default GameRoom;
