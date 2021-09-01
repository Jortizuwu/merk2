import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { addSaveList, deleteSaveList } from "../../action/ui";
import { ButtonBack } from "../global/ButtonBack";
import { GridImages } from "../home/GridImages";
import { startGetProduct } from "../../action/product";
import { useCallback } from "react";
import { useState } from "react";
import { Spinner } from "../global/Spinner";

export const ProductPage = ({ history }) => {
  const { saveList } = useSelector((state) => state.ui);
  const producto = useSelector((state) => state.product);
  const [isLoading, setLoading] = useState(true);

  const { products } = useSelector((state) => state.products);

  const change = false;

  const dispatch = useDispatch();
  const { id } = useParams();

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const uwu = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(startGetProduct(id));
  }, [id, dispatch]);

  const addListSaved = () => {
    if (!saveList.find((val) => val._id === id)) {
      dispatch(addSaveList(producto));
    } else {
      return;
    }
  };

  const deleteList = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteSaveList(id));
  };

  useEffect(() => {
    uwu();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">loading...</p>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto max-w-screen max-w-5xl mt-2 mb-14 sm:mb-48 lg:mb-80">
      <ButtonBack history={history} title={producto.nombre} />
      <div className="mt-2 flex flex-col justify-center sm:justify-start items-center sm:items-stretch sm:flex-row sm:space-x-4 mb-4">
        <div className="relative">
          <img
            src={
              producto.img
                ? producto.img
                : "https://image.ec21.com/image/rickychow/oimg_GC02023603_CA02232113/My-Goddess--Anime-Figure.jpg"
            }
            className="rounded h-full w-full object-cover"
            alt=""
          />
          {saveList.find((val) => val._id === id) ? (
            <button
              onClick={deleteList}
              className="absolute material-icons h-10 w-10 bg-white top-4 right-4 rounded-full text-red-500"
            >
              delete
            </button>
          ) : (
            <button
              onClick={addListSaved}
              className="absolute material-icons h-10 w-10 bg-white top-4 right-4 rounded-full text-red-500"
            >
              add_shopping_cart
            </button>
          )}
        </div>
        <div className="flex flex-col space-y-3 w-full sm:w-10/12">
          <p className="h-6 mx-auto mt-4 sm:mt-0 bg-gray-200 text-gray-800 text-center flex items-center rounded-md font-bold px-3">
            usado
          </p>
          <p>
            <span className="font-semibold">Precio</span> COP{" "}
            {formatterPeso.format(producto.precio)}
          </p>
          <div className="flex flex-row w-full space-x-2">
            <button
              className={`${
                change ? "w-1/2" : "w-full"
              }  h-10 text-xs bg-blue-500 text-white flex items-center justify-center rounded-md font-bold hover:bg-blue-400 transition duration-200 px-3`}
            >
              Comprar ahora
              <span className="material-icons ml-2">shopping_cart</span>
            </button>
            {change && (
              <button className="w-1/2 h-10 text-xs bg-green-500 text-white flex items-center justify-center hover:bg-green-400 transition duration-200 rounded-md font-bold px-3">
                Proponer intercambio
                <span className="material-icons ml-2">
                  published_with_changes
                </span>
              </button>
            )}
          </div>
          <button className="w-full h-10 text-xs bg-green-500 text-white flex items-center justify-center rounded-md font-bold hover:bg-green-400 transition duration-200 px-3">
            Contactar al vendedor
            <span className="material-icons ml-2">contact_phone</span>
          </button>
          <h5 className="font-semibold">Descripcion</h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <h5 className="font-semibold">
            Producto:
            <span className="text-sm font-normal"> {producto.nombre}</span>
          </h5>
          <h5 className="font-semibold">
            Publicado por:
            <span className="text-sm font-normal">
              {" "}
              {producto?.usuario?.nombre}
            </span>
          </h5>
        </div>
      </div>
      <h5 className="font-semibold">Mas Imagenes</h5>
      <Carousel
        className="h-44"
        dynamicHeight={true}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {[
          "https://picsum.photos/1012/520.jpg",
          "https://picsum.photos/1441/820.jpg",
          "https://picsum.photos/1361/620.jpg",
        ].map((img, index) => (
          <div key={index} className="w-full h-40">
            <div className="h-40 sm:h-72 lg:h-96 w-full">
              <img
                className="h-full w-full object-cover rounded"
                src={img}
                alt=""
              />
            </div>
          </div>
        ))}
      </Carousel>
      <div className="sm:mt-32 lg:mt-60">
        <p className="w-32 flex items-center justify-center bg-black text-white font-bold h-8 rounded-xl mb-2">
          Similares
        </p>
        <GridImages cards={products} />
      </div>
    </div>
  );
};
