import React from "react";
import { ButtonBack } from "../global/ButtonBack";

export const Chat = ({ history }) => {
  return (
    <div className="w-11/12 mx-auto max-w-screen max-w-5xl mt-2 mb-14 sm:mb-48 lg:mb-80">
      <ButtonBack history={history} title={"Chat"} />

      <div className="flex flex-col space-y-3 mt-5 h-full ">
        <div className="flex flex-col space-y-3 mb-28">
          <p className="h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12">
            hola uwu
          </p>
          <p className="h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12">
            hola uwu
          </p>
          <div className="flex justify-end">
            <p className="flex-col items-end h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12 flex">
              hola uwu
            </p>
          </div>
          <p className="h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12">
            hola uwu
          </p>
          <div className="flex justify-end">
            <p className="flex-col items-end h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12 flex">
              hola uwu
            </p>
          </div>{" "}
          <p className="h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12">
            hola uwu
          </p>
          <div className="flex justify-end">
            <p className="flex-col items-end h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12 flex">
              hola uwu
            </p>
          </div>{" "}
          <p className="h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12">
            hola uwu
          </p>
          <div className="flex justify-end">
            <p className="flex-col items-end h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12 flex">
              hola uwu
            </p>
          </div>{" "}
          <div className="flex justify-end">
            <p className="flex-col items-end h-9 px-3 py-2 bg-gray-200 rounded-md font-semibold w-9/12 flex">
              hola uwu
            </p>
          </div>{" "}

        </div>
        <div className="flex justify-center items-center w-full border border-blue-200 rounded-md space-x-2 bg-white hover:bg-gray-100 h-10 px-3">
          <span className=" text-gray-400 font-bold text-2xl material-icons">
            send
          </span>
          <input
            type="text"
            placeholder="Enviar mensaje"
            className="w-full bg-transparent h-full focus:outline-none font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
