import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../action/auth";

export const Presentation = () => {

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <div className="px-5 py-3 flex flex-col md:flex-row relative sm:h-60 md:h-32 w-full shadow bg-white rounded-lg text-black">
      <figure className="absolute inset-x-auto -top-24 md:-top-16 left-20 md:left-2 h-32 md:h-40 w-32 md:w-40 rounded-lg cursor-pointer bg-white">
        <img
          className="w-full h-full object-cover rounded-lg p-1"
          src="https://th.bing.com/th/id/OIP.UdIW34ww2SKEee4y4ivxWgHaI0?pid=ImgDet&rs=1"
          alt=""
        />
      </figure>
      <div className="mt-6 md:mt-0 ml-0 md:ml-40 flex flex-col md:flex-row justify-center items-center md:items-start space-y-2">
        <div className="flex flex-col items-center justify-between sm:items-start">
          <div className="flex flex-col md:flex-row md:items-baseline w-2/3 md:w-full space-x-5">
            <p className="text-2xl text-center md:text-left font-bold items-center">
              {user.nombre}
            </p>
            <p className="text-sm text-center">
              12 + 1{" "}
              <span className="material-icons text-center text-lg text-pink-500 felx flex-col justify-center items-center ">
                star
              </span>{" "}
            </p>
          </div>
          <div className="w-3/4 mt-3">
            <p className="text-xs text-center md:text-left md:text-sm font-semibold text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              beatae quam corporis aspernatur earum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
