export interface CreateGamePayload {
  nickname: string;
  game: string;
}

export interface CreateGameResponse {
  roomId: string;
  userId: string;
}
