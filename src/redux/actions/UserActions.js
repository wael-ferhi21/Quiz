import { LOGIN_USER, LOGOUT_USER } from "../constantes/Actions-Type";

export const login = (payload) => {
  window.localStorage.setItem("user", payload);
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const logout = () => {
  window.localStorage.removeItem("user");
  return {
    type: LOGOUT_USER,
  };
};
