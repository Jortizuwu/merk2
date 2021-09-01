import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";

export const startUploadInfoAction = (file) => {
  return async (dispatch) => {
    dispatch(loadingInfo());
    const fileUlr = await fileUpload(file);
    dispatch(uploadInfo(fileUlr));
    dispatch(loadingInfo());
  };
};

export const uploadInfo = (url) => ({
  type: types.uploadInfoT,
  payload: url,
});

export const loadingInfo = () => ({
  type: types.loading,
});
