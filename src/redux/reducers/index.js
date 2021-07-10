import loadingReducer from "./loadingReducers";
import usersReducer from "./usersReducers";
import errorReducer from "./errorReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  users: usersReducer,
  error: errorReducer,
});

export default rootReducer;
