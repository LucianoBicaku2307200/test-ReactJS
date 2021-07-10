import { VIEW_USERS } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case VIEW_USERS.LOAD_FAIL:
      return action.error;
    case VIEW_USERS.LOAD:
    case VIEW_USERS.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};
export default errorReducer;
