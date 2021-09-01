import React from "react";
import Masonry from "react-masonry-css";

import { Card } from "../global/Card";
const breakpointColumnsObj = {
  default: 5,
  1024: 4,
  768: 3,
  640: 2,
};

export const GridImages = ({ cards }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex flex-row space-x-4"
    >
      {cards.map((image) => (
        <Card
          image={
            image.img
              ? image.img
              : "https://th.bing.com/th/id/OIP.4dEGIhAAmkViJeyWVZIn1gHaFw?pid=ImgDet&rs=1"
          }
          title={image.nombre}
          id={image._id}
          change={image.change}
          price={image.precio}
          key={image._id}
        />
      ))}
    </Masonry>
  );
};
