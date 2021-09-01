import { types } from "../types/types";

const initialState = {
  url: null,
  loading: false,
};

export const upLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uploadInfoT:
      return {
        ...state,
        url: action.payload,
      };
    case types.loading:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
