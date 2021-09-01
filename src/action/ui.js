import { types } from "../types/types";

export const moreOptions = () => ({
  type: types.more,
});

export const modalEventsActive = () => ({
  type: types.modalEven,
});

export const addSaveList = (card) => ({
  type: types.addSave,
  payload: card,
});

export const deleteSaveList = (id) => ({
  type: types.delteSave,
  payload: id,
});

export const deleteMainA = (id) => ({
  type: types.deleteMain,
  payload: id,
});

export const addNewPing = (data) => ({
  type: types.addNewImage,
  payload: data,
});
