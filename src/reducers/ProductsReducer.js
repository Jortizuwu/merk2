import { types } from "../types/types";

const productState = {
  products: [],
};

export const ProductsReducer = (state = productState, acction) => {
  switch (acction.type) {
    case types.loadProducts:
      return {
        ...state,
        products: acction.payload.products,
      };

    case types.addProduct:
      return {
        ...state,
        products: [...state.products, acction.payload],
      };
    // case "deleteProduct":
    //   return {
    //     ...state,
    //     products:
    //   }
    default:
      return state;
  }
};
