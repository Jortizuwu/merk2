import React from "react";

import { Presentation } from "./Presentation";
import { Info } from "./Info";

export const ProfileScreen = () => {
  return (
    <div className="relative">
      <figure className="w-full h-44 md:h-60 cursor-pointer">
        <img
          className="object-cover w-full h-full"
          src="https://images6.alphacoders.com/112/thumb-1920-1126221.jpg"
          alt=""
        />
      </figure>
      <div className="absolute inset-x-0 top-40 md:top-52 container mx-auto md:w-2/3 w-11/12  space-y-6 h-full">
        <Presentation />
        <Info />
      </div>
    </div>
  );
};
