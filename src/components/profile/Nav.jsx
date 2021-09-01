import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="bg-white w-full md:w-1/2 md:h-48 h-full rounded-lg shadow py-4 ">
      <nav className="h-full w-full ">
        <ul className="h-full w-full flex flex-col font-bold text-xs md:text-sm">
          <li className=" h-10 w-full border-l-4 border-blue-400 hover:border-l-4 hover:border-blue-400 hover:bg-gray-200 transition duration-200">
            {" "}
            <Link
              to="/home/home"
              className="link w-full h-full pl-9 flex items-center"
            >
              publicaciones
            </Link>{" "}
          </li>
          <li className="h-10 w-full border border-white hover:border-l-4 hover:border-blue-400 hover:bg-gray-200 transition duration-200">
            {" "}
            <Link
              to="/home/home"
              className="link w-full h-full pl-9 flex items-center"
            >
              start
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};
