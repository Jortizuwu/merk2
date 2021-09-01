import storeApi from "../api/storeApi";
import { types } from "../types/types";
export const startLoadProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await storeApi.get("/productos?limite=50");
      dispatch(loadProducts(data.productos));
    } catch (error) {}
  };
};

export const StartAddProduct = (categoryId, productName, precio, img) => {
  return async (dispatch) => {
    try {
      const { data } = await storeApi.post("/productos", {
        nombre: productName,
        categoria: categoryId,
        precio,
        img,
      });
      dispatch(addProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startDelProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await storeApi.delete(`/productos/${id}`);
      console.log(data);
      dispatch(deleteP(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const loadProducts = (products) => ({
  type: types.loadProducts,
  payload: {
    products,
  },
});

const addProduct = (product) => ({
  type: types.addProduct,
  payload: product,
});

const deleteP = (product) => ({
  type: types.deleteProduct,
  payload: product,
});
