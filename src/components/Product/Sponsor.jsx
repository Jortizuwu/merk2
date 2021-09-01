import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../global/ButtonBack";
import { GridImages } from "../home/GridImages";

export const Sponsor = ({ history }) => {
  const { title } = useParams();

  const { pinesHomes } = useSelector((state) => state.ui);
  return (
    <div className="m-1 mb-14">
      <ButtonBack history={history} id={title} />
      <div className="mt-2">
        <button className="w-32 flex items-center justify-center bg-black text-white font-bold h-8 rounded-xl mb-2">
          {title}
        </button>
        <GridImages cards={pinesHomes} />
      </div>
    </div>
  );
};
