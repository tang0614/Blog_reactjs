import * as actionTypes from "./actions";
import instance from "../axios-order";
const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

const authSuccess = ({ idToken, localId }) => {
  return { type: actionTypes.AUTH_SUCCESS, token: idToken, userId: localId };
};

const authFail = (error) => {
  return { type: actionTypes.AUTH_FAIL, error: error };
};

const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate < new Date()) {
        dispatch(logout());
      } else {
        let data = { localId: "", idToken: "" };
        data.localId = userId;
        data.idToken = token;
        dispatch(authSuccess(data));
        dispatch(
          checkAuth((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};

const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url;
    if (!isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8A8-qZz6pqzbo9AFvhut0AJppX8a3h_4`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8A8-qZz6pqzbo9AFvhut0AJppX8a3h_4`;
    }
    instance
      .post(url, authData)
      .then((res) => {
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        dispatch(authSuccess(res.data));
        dispatch(checkAuth(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.message));
      });
  };
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const checkAuth = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export { auth, checkAuth, logout, setAuthRedirectPath, authCheckState };
