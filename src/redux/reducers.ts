import { combineReducers } from "redux";

const UserId = (state = "", action: any) => {
  switch (action.type) {
    case "ADD_USER_ID":
      return action.payload;

    default:
      return state;
  }
};

const allReducers = combineReducers({
  UserId,
});

export default allReducers;
