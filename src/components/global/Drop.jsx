import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../../action/auth";

export const Drop = ({ displayName }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div
      className="origin-top-right absolute font-semibold top-14 right-9 mt-2 w-44 lg:w-48 rounded-md shadow-lg p-3 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      <h3 className="text-center text-xs md:text-sm">Hello {displayName}</h3>
      <div className="py-4">
        <Link
          to="/"
          className="flex w-full flex-row items-center px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-200 "
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
        >
          <span className="material-icons mr-2">account_circle</span>
          Your Profile
        </Link>
        <Link
          to="/"
          className="flex w-full flex-row items-center px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-200 "
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-1"
        >
          <span className="material-icons mr-2">settings</span>
          Settings
        </Link>
      </div>
      <div className="border-t-2 border-gray-300">
        <button
          onClick={handleLogout}
          className="flex w-full font-semibold text-red-500 mt-4 flex-row items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-200 "
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-2"
        >
          <span className="material-icons mr-2">logout</span>
          Log out
        </button>
      </div>
    </div>
  );
};
