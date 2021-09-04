import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GridImages } from "./GridImages";
import { modalEventsActive } from "../../action/ui";
import { AddImageModal } from "../global/AddImageModal";
import { Categories } from "../global/Categories";
import { ArticlueContainer } from "../global/ArticlueContainer";
import { SearchHome } from "./SearchHome";
import { CarruselA } from "./CarruselA";
import { startLoadProducts } from "../../action/Products";

export const UnplashPage = () => {
  const { pinesHomes, modalOpen } = useSelector((state) => state.ui);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalEventsActive());
  };

  const uwu = useCallback(() => {
    dispatch(startLoadProducts());
  }, [dispatch]);

  useEffect(() => {
    uwu();
  }, []);

  return (
    <div className="mb-14 lg:mt-3">
      <SearchHome />
      <CarruselA />
      <div className="w-11/12 mx-auto max-w-screen max-w-5xl">
        <Categories />
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <ArticlueContainer title="Más relevantes" description="Productos mas visto por los usuarios 🤑" />
          <ArticlueContainer title="Más recientes" description="Productos subidos recientemente 🥵" />
          <ArticlueContainer
            title="Te podrina interesar"
            description="Podrian ser de tú interes 🧐"
          />
        </div>
        {pinesHomes.length > 0 ? (
          <div className="mt-1 lg:mb-20">
            <button className="w-32 mt-5 flex items-center justify-center bg-black text-white font-bold h-8 rounded-xl mb-2">
              Selecciones
            </button>
            <GridImages cards={products} />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 sm:bg-none">
                <p className="text-sm font-medium sm:mb-1 text-gray-500">
                  Hello jojo
                </p>
                <h2 className="text-xl font-semibold sm:text-2xl sm:leading-7 text-black md:text-3xl relative z-0 transition">
                  your save list is empty
                </h2>
              </div>
              <div className="col-start-1 row-start-2 px-4 sm:pb-16">
                <div className="flex items-center justify-center text-sm font-medium my-5 sm:mt-2 sm:mb-4 ">
                  <button
                    onClick={openModal}
                    className="material-icons bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
                  >
                    add_circle_outline
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {modalOpen && <AddImageModal />}
      </div>
    </div>
  );
};
