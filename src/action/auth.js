// import AsyncStorage from "@react-native-async-storage/async-storage";
import storeApi from "../api/storeApi";
import { types } from "../types/types";

export const StartSingIn = (correo, password) => {
  return async (dispatch) => {
    try {
      const {
        data: { token, usuario },
      } = await storeApi.post("/auth/login", {
        correo,
        password,
      });
      dispatch(singUp(token, usuario));
      // await localStorage.setItem("token", token);
    } catch (error) {
      // console.log(error.response.data.msg);
      dispatch(addError(error.response.data.msg));
    }
  };
};

export const registerStart = (correo, password, nombre) => {
  return async (dispatch) => {
    try {
      const {
        data: { token, usuario },
      } = await storeApi.post("/usuarios", {
        correo,
        password,
        nombre,
      });
      dispatch(singUp(token, usuario));
      // await AsyncStorage.setItem("token", token);
    } catch (error) {
      // console.log();
      dispatch(addError(error.response.data.msg));
    }
  };
};

export const singUp = (token, user) => ({
  type: types.singUp,
  payload: {
    token,
    user,
  },
});

export const addError = (msgErr) => ({
  type: types.addError,
  payload: msgErr,
});

export const removeError = () => ({
  type: "removeError",
});

export const notAuthenticated = () => ({
  type: "notAuthenticated",
});

export const logOut = () => ({
  type: types.logout,
});
