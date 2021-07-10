import { VIEW_USERS, CREATE_USERS, UPDATE_USERS } from "../constants";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case VIEW_USERS.LOAD_SUCCESS:
      return [...state, ...action.users];
    case CREATE_USERS:
      return [...state, action.user];

    case UPDATE_USERS:
      return state.map((user) =>
        user.id === action.user.id ? { ...user, ...action.user } : user
      );

    default:
      return state;
  }
};

export default usersReducer;
