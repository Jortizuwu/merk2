import React from "react";
// import { useParams } from "react-router-dom";

export const ButtonBack = ({ history, title, id }) => {
  // const { title } = useParams();

  return (
    <div className="flex flex-row justify-between items-center">
      <button
        onClick={() => {
          history.goBack();
        }}
        className="material-icons h-8 w-8 bg-blue-500 text-white font-bold rounded-full"
      >
        chevron_left
      </button>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};
