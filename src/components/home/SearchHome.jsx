import React from "react";
import { useDispatch } from "react-redux";
import { modalEventsActive } from "../../action/ui";

export const SearchHome = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalEventsActive());
  };
  return (
    <div className="px-1 mx-auto max-w-screen max-w-5xl lg:w-11/12 lg:mx-auto flex flex-row items-center justify-between">
      <div className="flex mt-1 md-0 md:mb-2 justify-center items-center w-10/12 border border-blue-200 rounded-md space-x-2 bg-white hover:bg-gray-100 h-10 px-3">
        <span className=" text-gray-400 font-bold text-2xl material-icons">
          search
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent h-full focus:outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col h-full">
        <button
          onClick={openModal}
          className="material-icons border h-full border-blue-200 bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
        >
          add_circle_outline
        </button>
      </div>
    </div>
  );
};
