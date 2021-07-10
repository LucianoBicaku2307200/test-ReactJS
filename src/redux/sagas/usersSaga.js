import { call, put, takeEvery } from "redux-saga/effects";
import { getusers } from "../../api";
import { setError, setUsers } from "../actions";
import { VIEW_USERS } from "../constants";

export function* handleUsersLoad() {
  try {
    const users = yield call(getusers);
    yield put(setUsers(users));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchUsersLoad() {
  yield takeEvery(VIEW_USERS.LOAD, handleUsersLoad);
}
