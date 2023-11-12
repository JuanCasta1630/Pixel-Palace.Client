import React, { useState } from "react";
import { categorias } from "../../services/categories.json";
import { Card } from "antd";

const CategoriasPage = () => {
  const length = categorias.length;
  const [numCategorias, setNumCategorias] = useState(5);
  const mostrarTodas = numCategorias === length;

  const handleVerMasClick = () => {
    if (mostrarTodas) {
      setNumCategorias(5);
    } else {
      setNumCategorias(length);
    }
  };
  const categories = categorias.slice(0, numCategorias);
  return (
    <Card className="dark:bg-gray-400 text-white my-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-6">Categories</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="card-home card2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md max-w-xs w-48"
            >
              <a
                href={`/categoria/${category.id}`}
                className="text-white font-semibold flex flex-col justify-center items-center"
              >
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
          className="mt-6 button3 w-96 md:text-2xl"
        >
          {mostrarTodas ? "See less" : "See more"}
        </button>
      </div>
    </Card>
  );
};

export default CategoriasPage;
