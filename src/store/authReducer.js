import * as actionTypes from "./actions";
import { updateObject } from "./utility";
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirect: "/",
};

const success = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const fail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authLogOut = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  console.log("redirecting path.....");
  return updateObject(state, { redirect: action.path });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return success(state, action);
    case actionTypes.AUTH_FAIL:
      return fail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogOut(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
