import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Anime",
    //   description: "Lorem ipsum",
    ico: "https://th.bing.com/th/id/OIP.jPuZT4szVlVutkbXMzFLzAAAAA?pid=ImgDet&rs=1",
  },
  {
    title: "Bicicletas",
    //   description: "Lorem ipsum",
    ico: "https://th.bing.com/th/id/OIP.7eo1Q0bzwqQWzXqXjbhHrgHaHa?pid=ImgDet&rs=1",
  },
  {
    title: "Ropa",
    //   description: "Lorem ipsum",
    ico: "https://th.bing.com/th/id/R.2aba52d3cf85048d086dbaace58ef937?rik=dVuG8TNRKt2iOg&pid=ImgRaw",
  },
  {
    title: "Ron",
    //   description: "Lorem ipsum",
    ico: "https://th.bing.com/th/id/R.404d6f7bbda01701541da82916229b0e?rik=aWx3Dc%2bM6qkoiw&pid=ImgRaw",
  },
  {
    title: "Camaras",
    //   description: "Lorem ipsum",
    ico: "https://th.bing.com/th/id/OIP.wkf54fVUEqv_UQiOs5dstAHaHa?pid=ImgDet&rs=1",
  },
  {
    title: "nose",
    //   description: "Lorem ipsum",
    ico: "https://images.vexels.com/media/users/3/134890/isolated/preview/7f6ef474d0ae6f65d072ff98fad7326e-caja-de-regalo-amarilla-icono-de-lazo-rojo-3-by-vexels.png",
  },
  {
    title: "hola",
    //   description: "Lorem ipsum",
    ico: "https://th.bing.com/th/id/OIP.wkf54fVUEqv_UQiOs5dstAHaHa?pid=ImgDet&rs=1",
  },
];

export const Categories = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-2">
        <h3 className="font-bold">Categories</h3>
        <img
          className="h-5 object-cover"
          src="https://th.bing.com/th/id/R.f0174f7e641a00d3ac7549aefde43b7d?rik=QntYhTqm3Gk%2f1g&riu=http%3a%2f%2fwww.alrwl.com%2fskin%2fecms223%2fimages%2f01.png&ehk=asAt58s583yiQoUkWkw4jsS4aIbohOGua8B1UzxY1Mg%3d&risl=&pid=ImgRaw"
          alt=""
        />
      </div>
      <div className="flex flex-row space-x-3 items-center flex-nowrap overflow-x-scroll h-24">
        {categories.map(({ title, ico }, idx) => (
          <Link
            to={`/uwu/${title}`}
            className="h-20 w-40 p-1 flex flex-col justify-center"
            key={title + idx.toString()}
          >
            <div className="rounded-full h-14 w-14 border overflow-hidden bg-white">
              <img src={ico} alt="" className="h-full w-full object-cover" />
            </div>
            <span className="text-xs text-center">{title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};
