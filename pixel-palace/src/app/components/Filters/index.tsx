import React, { useState } from 'react';

const Filters: React.FC = () => {
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(50);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value, 10));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Product Name</label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Price</label>
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Country</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="argentina">Argentina</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
            <option value="brasil">Brasil</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Type</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="tarjeta">Cards</option>
            <option value="codigo">Code</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-white">Platform</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-indigo-300 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="steam">Steam</option>
            <option value="playstation">Playstation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
