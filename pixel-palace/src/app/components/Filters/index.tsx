import React, { useState } from 'react';

export interface FiltersProps {
  onFilterChange: (filters: FiltersData) => void;
  filters: FiltersData;
}

interface FiltersData {
  plataforma: string;
  precio: number;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, filters }) => {
  const [plataforma, setCategory] = useState(filters.plataforma);
  const [precio, setPrice] = useState(filters.precio);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value, 10));
  };

  const handleFilterChange = () => {
    onFilterChange({ plataforma, precio });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Filtros</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Pais</label>
          <select
            value={plataforma}
            onChange={handleCategoryChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          >
            <option value="all">Todos</option>
            <option value="Playstation">Playstation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo">Nintendo</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Precio</label>
          <input
            type="number"
            value={precio}
            onChange={handlePriceChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>
      </form>
      <button onClick={handleFilterChange}>Aplicar filtros</button>
    </div>
  );
};

export default Filters;
