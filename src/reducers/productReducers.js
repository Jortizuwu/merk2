import { types } from "../types/types";

const initialState = {
  _id: "",
  categoria: null,
  nombre: "",
  precio: 0,
  usuario: null,
  img: null,
};

export const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.loadProduct:
    case types.updateProduct:
      return {
        ...state,
        _id: action.payload._id,
        categoria: action.payload.categoria,
        nombre: action.payload.nombre,
        precio: action.payload.precio,
        usuario: action.payload.usuario,
        img: action.payload.img,
      };
    case types.uploadImageProduct:
      return {
        ...state,
        img: action.payload.assets[0].uri,
      };
    default:
      return state;
  }
};
