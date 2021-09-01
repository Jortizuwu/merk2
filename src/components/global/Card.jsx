import React from "react";

import { Link } from "react-router-dom";

export const Card = ({ image, title, id, change, price }) => {

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <div
      className="underline:none border rounded-xl mb-2 bg-white overflow-hidden"
      // to={`/product/${id}`}
    >
      <Link
        to={`/product/${id}`}
        className="w-full rounded-t-xl object-cover lg:h-auto cursor-pointer overflow-hidden"
      >
        <img
          className="w-full rounded-t-xl object-cover lg:h-auto transform hover:scale-110 transition duration-200"
          src={image}
          alt=""
        />
      </Link>
      <div className="w-full h-auto bg-white rounded-b-xl">
        <div className="p-1 flex flex-col w-full bg-white rounded-b-xl ">
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm">{title}</p>
            {change ? (
              <div className="bg-green-500 rounded-full h-2 w-2"></div>
            ) : (
              <div className="bg-red-500 rounded-full h-2 w-2"></div>
            )}
          </div>
          <div className="w-full flex flex-row justify-between">
            <p className="w-9/12 capitalize text-xs md:text-lg align-top font-bold">
              COP {formatterPeso.format(price)}
            </p>
            <span className="material-icons text-sm">
              published_with_changes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
