import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slides = [
  {
    title: "First item",
    description: "Lorem ipsum",
    img: "https://th.bing.com/th/id/R.12183edb401e6c5e248483456916f3ee?rik=9%2bcac9S6uwHq%2fA&pid=ImgRaw",
  },
  {
    title: "Second item",
    description: "Lorem ipsum",
    img: "https://somoskudasai.com/wp-content/uploads/2020/12/portada_chainsaw-man-22.jpg",
  },
  {
    title: "wuu item",
    description: "Lorem ipsum",
    img: "https://th.bing.com/th/id/R.0778f67c4145c654b3056780055e3cc1?rik=xFvXOxBAVioRMw&pid=ImgRaw&r=0",
  },
  {
    title: "wuuw item",
    description: "Lorem ipsum",
    img: "https://ze-robot.com/dl/ma/makima-vs-gun-devil-1280%C3%971024.jpg",
  },
];

export const CarruselA = () => {
  return (
    <div className="px-1 md:px-0 mt-2 sm:mb-32 lg:mb-56">
      <Carousel
        showThumbs={false}
        className="h-44"
        dynamicHeight={true}
        showArrows={true}
        infiniteLoop={true}
      >
        {slides.map(({ img }, index) => (
          <div key={index} className="w-full h-40">
            <div className="h-40 sm:h-72 lg:h-96 w-full">
              <img
                className="h-full w-full object-cover rounded lg:rounded-none"
                src={img}
                alt=""
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
