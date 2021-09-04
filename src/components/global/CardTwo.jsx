import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaveList } from "../../action/ui";

export const CardTwo = ({ image, price, inter = true, title, id }) => {
  const dispatch = useDispatch();

  const deleteList = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteSaveList(id));
  };

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Link className="flex p-1 border mb-1 shadow-sm" to={`/product/${id}`}>
      <div className="flex-none w-20 relative">
        <img
          src={image} //TODO: IMAGE
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto py-2 px-5">
        <div className="flex flex-wrap items-baseline">
          <h2 className="w-full flex-none text-base text-black mb-1.5">
            {title}
          </h2>
          <div className="text-sm text-black flex flex-row justify-between items-center w-full">
            <p className="block">COP {formatterPeso.format(price)}</p>
            {inter ? (
              <span className="material-icons block text-sm text-green-500">
                published_with_changes
              </span>
            ) : (
              <span className="material-icons block text-sm text-red-500">
                published_with_changes
              </span>
            )}
          </div>
        </div>
        <div className="flex mt-2 space-x-3 mb-1 text-sm font-semibold uppercase">
          <div className="flex-auto flex space-x-3">
            <Link
              to="/chat"
              className="w-full flex items-center justify-center bg-black text-white font-semibold"
              type="submit"
            >
              Comprar ahora
            </Link>
          </div>
          <button
            onClick={deleteList}
            className="flex-none material-icons flex items-center justify-center w-10 h-10 text-gray-900 border border-gray-200"
            type="button"
          >
            delete
          </button>
        </div>
      </form>
    </Link>
  );
};
