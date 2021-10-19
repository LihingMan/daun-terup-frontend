export const addUserId = (userId: string) => {
  return {
    type: "ADD_USER_ID",
    payload: {
      userId: userId,
    },
  };
};
