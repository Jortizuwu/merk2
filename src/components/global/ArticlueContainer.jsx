import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ArticlueContainer = ({ title, description }) => {
  const { pinesHomes } = useSelector((state) => state.ui);
  return (
    <div className="flex flex-col h-44 rounded-lg shadow-sm p-2 bg-white">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col">
          <h4 className="font-semibold text-xs">{title}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <Link
          to={`/uwu/${title}`}
          className="flex items-center text-sm text-gray-400"
        >
          ver mas <span className="material-icons">navigate_next</span>
        </Link>
      </div>
      <div className="flex flex-row">
        {pinesHomes.slice(0, 3).map(({ id, url }) => (
          <Link to={`/product/${id}`} key={id} className="p-1 w-full">
            <img
              src={url}
              alt=""
              className="h-24 w-full rounded-md object-cover"
            />
            <p className="text-xs mt-2 font-semibold">COP 12,333</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
