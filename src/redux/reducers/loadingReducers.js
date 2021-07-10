import { VIEW_USERS } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case VIEW_USERS.LOAD:
      return true;

    case VIEW_USERS.LOAD_SUCCESS:
      return false;

    case VIEW_USERS.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
