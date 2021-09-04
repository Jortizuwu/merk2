import { types } from "../types/types";

const initialState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addError:
      return {
        ...state,
        user: null,
        status: "no-authenticated",
        token: null,
        errorMessage: action.payload,
      };
    case types.removeError:
      return {
        ...state,
        errorMessage: "",
      };
    case types.singUp:
      return {
        ...state,
        errorMessage: "",
        status: "authenticated",
        token: action.payload.token,
        user: action.payload.user,
      };
    case types.logout:
    case types.notAuthenticated:
      return {
        ...state,
        status: "no-authenticated",
        token: null,
        user: null,
      };
    case types.loadProfileImage:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
