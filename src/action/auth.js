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
      await localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      // console.log(error.response.data.msg);
      dispatch(addError(error.response.data.msg));
    }
  };
};

export const StartLoadProfile = (data, id) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("archivo", data);
    try {
      const { data } = await storeApi.put(`/uploads/usuarios/${id}`, formData);
      dispatch(loadImage(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerStart = (correo, password) => {
  return async (dispatch) => {
    try {
      const {
        data: { token, usuario },
      } = await storeApi.post("/auth/login", {
        correo,
        password,
      });
      dispatch(singUp(token, usuario));
      await localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
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
  type: types.notAuthenticated,
});

export const logOut = () => ({
  type: types.logout,
});

const loadImage = (data) => ({
  type: types.loadProfileImage,
  payload: data,
});
