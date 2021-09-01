import storeApi from "../api/storeApi";
import { types } from "../types/types";

export const startGetProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await storeApi.get(`/productos/${id}`);
      dispatch(getProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (categoryId, productName, productId,) => {
  return async (dispatch) => {
    try {
      const { data } = await storeApi.put(`/productos/${productId}`, {
        nombre: productName,
        categoria: categoryId,
      });
      dispatch(update(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const StartUploadImage = (data, id) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("archivo", data);

    try {
      const resp = await storeApi.put(`/uploads/productos/${id}`, formData);
      // console.log(resp.data.img);
      dispatch(uploadImage(resp.data.img));
    } catch (error) {
      console.log(error);
    }
  };
};

const getProduct = (product) => ({
  type: types.loadProduct,
  payload: product,
});

const update = (product) => ({
  type: types.updateProduct,
  payload: product,
});

const uploadImage = (uri) => ({
  type: types.uploadImageProduct,
  payload: uri,
});
