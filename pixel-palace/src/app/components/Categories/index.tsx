import React, { useState } from "react";
import { categorias } from "@/app/services/categories.json";

const CategoriasPage = () => {
  const [numCategorias, setNumCategorias] = useState(5);
  const mostrarTodas = numCategorias === categorias.length;

  const handleVerMasClick = () => {
    if (mostrarTodas) {
      setNumCategorias(5);
    } else {
      setNumCategorias(categorias.length);
    }
  };

  return (
    <div className="flex flex-col mt-6 justify-center items-center">
      <h1 className="text-2xl font-semibold mb-4">Categories</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {categorias.slice(0, numCategorias).map((category) => (
          <div
            key={category.id}
            className="card-home card2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md max-w-xs w-48"
          >
            <a href={`/categoria/${category.id}`} className="text-white font-semibold flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox={category.viewBox}
              >
                <path fill="currentColor" d={category.icon} />
              </svg>
              {category.name}
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={handleVerMasClick}
        className="my-4 button3 dark:w-48"
      >
        {mostrarTodas ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default CategoriasPage;
