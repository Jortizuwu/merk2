import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardTwo } from "../global/CardTwo";

export const Saved = () => {
  const { saveList } = useSelector((state) => state.ui);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sumaTotal = () => {
      let acu = 0;
      saveList
        .map((a) => parseFloat(a.precio))
        .forEach((element) => {
          acu += element;
        });
      setTotal(acu);
    };
    sumaTotal();
  }, [saveList]);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });


  return (
    <>
      {saveList.length > 0 ? (
        <div className="m-1">
          <h1 className="font-semibold text-center mt-2 text-xl"> Carrito </h1>
          {saveList.map((image) => (
            <CardTwo
              image={
                image?.img
                  ? image.img
                  : "https://th.bing.com/th/id/OIP.4dEGIhAAmkViJeyWVZIn1gHaFw?pid=ImgDet&rs=1"
              }
              title={image?.nombre}
              id={image?._id}
              change={image?.change}
              price={image?.precio}
              key={image?._id}
            />
          ))}
          <button
            className="w-full flex mt-3 items-center bg-green-500 justify-center text-white h-10 font-semibold"
            type="submit"
          >
            total { formatterPeso.format(total)} COP
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-">
          <div className="text-center">
            <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 sm:bg-none">
              <p className="text-sm font-medium sm:mb-1 text-gray-500">
                Hello jojo
              </p>
              <h2 className="text-xl font-semibold sm:text-2xl sm:leading-7 text-black md:text-3xl">
                your save list is empty
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
      )}
    </>
  );
};
