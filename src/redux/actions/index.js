import { VIEW_USERS, CREATE_USERS, UPDATE_USERS } from "../constants";

export const loadUsers = () => {
  return {
    type: VIEW_USERS.LOAD,
  };
};

export const setUsers = (users) => ({
  type: VIEW_USERS.LOAD_SUCCESS,
  users,
});

export const setError = (error) => ({
  type: VIEW_USERS.LOAD_FAIL,
  error,
});

export const createUser = (user) => {
  return {
    type: CREATE_USERS,
    user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USERS,
    user,
  };
};
