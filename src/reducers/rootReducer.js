import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ProductReducers } from "./productReducers";
import { ProductsReducer } from "./ProductsReducer";
import { uiReducer } from "./uiReducer";
// import { upLoadReducer } from "./upLoadReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  product: ProductReducers,
  products: ProductsReducer,
  // upload: upLoadReducer,
});
