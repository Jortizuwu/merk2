import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { modalEventsActive } from "../../action/ui";
import { logOut } from "../../action/auth";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-50%" },
};

export const Navbar = () => {
  const dispatch = useDispatch();
  const [menuBar, setMenuBar] = useState(false);
  const { saveList } = useSelector((state) => state.ui);

  const openModal = () => {
    dispatch(modalEventsActive());
  };

  const showMenuBar = () => {
    setMenuBar(!menuBar);
  };

  return (
    <nav className="fixed z-50 w-full bottom-0 right-0 bg-white filter drop-shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14 lg:h-20">
          <div className="absolute inset-y-0 left- flex items-center sm:hidden">
            <button
              type="button"
              onClick={showMenuBar}
              className="inline-flex transition duration-200 material-icons items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {menuBar ? "close" : "menu"}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-11 space-x-3">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="hidden sm:block h-full w-auto"
                src="https://i.imgur.com/G1AVCyy.jpg"
                alt="Workflow"
              />
            </Link>
          </div>
          <div className="absolute left-14 inset-y-0 right-0 flex w-11/12 space-x-3 items-center justify-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-col ">
              <button
                onClick={openModal}
                className="material-icons text-xl lg:text-3xl bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
              >
                add_circle_outline
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <NavLink
                to="/profile"
                exact
                activeClassName="bg-black text-white text-blue-500"
                className="flex items-center ml-3 text-xl lg:text-3xl material-icons bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
              >
                account_circle
              </NavLink>
            </div>
            <div className="flex flex-col items-center justify-center">
              <NavLink
                to="/"
                exact
                activeClassName="bg-black text-white text-blue-500"
                className="flex items-center ml-3 text-xl lg:text-3xl material-icons bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
              >
                home
              </NavLink>
            </div>
            <div className="flex flex-col items-center justify-center">
              <NavLink
                to="/hola2"
                exact
                activeClassName="bg-black text-white"
                className="flex items-center ml-3 text-xl lg:text-3xl material-icons bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
              >
                question_answer
              </NavLink>
            </div>
            <div className="flex flex-col items-center justify-center relative ">
              <NavLink
                to="/saved"
                exact
                activeClassName="bg-black text-white text-blue-500"
                className=" flex items-center ml-3 text-xl lg:text-3xl material-icons bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
              >
                shopping_carts
              </NavLink>
              <div className="text-xs bg-green-500 h-3 w-3 rounded-full flex items-center flex-col justify-center text-white font-bold absolute top-1 z-0">
                {saveList.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="sm:hidden bg-white"
        id="mobile-menu"
        animate={menuBar ? "open" : "closed"}
        variants={variants}
      >
        {menuBar && (
          <div className={`relative block px-2 pt-2 pb-3 space-y-1`}>
            <NavLink
              onClick={showMenuBar}
              to="/"
              exact
              activeClassName="bg-black text-white"
              className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              exact
              onClick={showMenuBar}
              to="/saved"
              activeClassName="bg-black text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Saved
            </NavLink>
            <button
              onClick={() => {
                dispatch(logOut());
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium bg-red-500"
            >
              logOut
            </button>
            <div className="flex sm:hidden justify-center items-center w-full border border-blue-100 rounded-full space-x-2 bg-white hover:bg-gray-100 p-1">
              <span className=" text-gray-400 font-bold text-2xl material-icons">
                search
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent h-full focus:outline-none font-semibold"
              />
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};
