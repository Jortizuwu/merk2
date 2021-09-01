import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GridImages } from "../home/GridImages";
import { Nav } from "./Nav";
// import { Publication } from "../global/Publication";

export const Info = () => {
  const [userPro, setuserPro] = useState([]);
  const { products } = useSelector((state) => state.products);
  const {
    user: { nombre },
  } = useSelector((state) => state.auth);

  const userProducts = () => {
    const newArr = products.filter((prod) => prod.usuario.nombre === nombre);
    setuserPro(newArr);
  };

  useEffect(() => {
    userProducts();
  }, []);

  return (
    <div className="h-full flex flex-col md:flex-row md:space-x-4 space-y-6 sm:flex sm:flex-row w-full mb-48">
      <Nav />
      {userPro.length === 0 ? (
        <div className="flex justify-center items-">
          <div className="text-center">
            <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 sm:bg-none">
              <p className="text-sm font-medium sm:mb-1 text-gray-500">
                Hello {nombre}
              </p>
              <h2 className="text-xl font-semibold sm:text-2xl sm:leading-7 text-black md:text-3xl">
                no has publicado ningun producto hasta ahora
              </h2>
            </div>
            <div className="col-start-1 row-start-2 px-4 sm:pb-16">
              <div className="flex items-center justify-center text-sm font-medium my-5 sm:mt-2 sm:mb-4 ">
                <div> :V </div>
              </div>
              <hr className="full border-gray-300 hidden sm:block" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-52">
          <GridImages cards={userPro} />
        </div>
      )}
    </div>
  );
};
