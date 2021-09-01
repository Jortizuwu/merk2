import React from "react";
import { useDispatch } from "react-redux";
import { deleteMainA } from "../../action/ui";

export const ToulTips = ({ pinId }) => {
  const dispatch = useDispatch();
  const handleDeleteMainList = () => {
    dispatch(deleteMainA(pinId));
  };

  return (
    <div
      className="p-2 w-28 absolute right-4 bottom-12 mt-2 sm:w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition duration-200"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      <p className="border-b-2 px-1 sm:px-2 mx-auto text-xs sm:text-sm font-semibold">
        Este Pin estaba inspirado en tu actividad reciente
      </p>
      <button
        onClick={handleDeleteMainList}
        className="w-full flex items-center px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-200 hover:text-red-500 focus:text-red-500 transition duration-300"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-0"
      >
        <span className="material-icons mr-0 text-lg ms:mr-4">delete</span>
        Delete
      </button>
      {/* <button
        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-300"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-1"
      >
        Settings
      </button>
      <button
        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-300"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-2"
      >
        Sign out
      </button> */}
    </div>
  );
};
