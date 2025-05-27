import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/Prodact.json';  // import data langsung
import AboutSedap from '../components/AboutSedap';
import FooterSedap from '../components/FooterSedap';

const MenuMakan = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 py-5">
      {/* Header */}
      <div className="mb-10">
        <p className="text-green-700 font-semibold text-sm uppercase mb-2">Recently Added</p>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-4xl font-extrabold"> FOOD MENU</h2>
          <div className="space-x-4 text-sm text-gray-600">
            <button className="text-green-600 border-b-2 border-green-600 pb-1">All</button>
            <button>Dairy</button>
            <button>Pantry</button>
            <button>Meat</button>
            <button>Fruits</button>
            <button>Vegetables</button>
          </div>
        </div>
      </div>

      {/* Produk Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Produk tidak tersedia...</p>
        )}
      </div>
       {/* Banner*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div className="relative bg-green-100 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://i.pinimg.com/736x/b4/5e/00/b45e00ad75172f22a846e4968cc1c9f6.jpg" 
            alt="Banner 1"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 p-6 md:p-10">
            <p className="text-sm uppercase text-green-600 font-medium mb-1">&</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">100% Sedap</h2>
            <p className="text-gray-700 mb-4">Quality Delicious Food Store</p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">Order Now</button>
          </div>
        </div>
        {/* Banner 2*/}
        <div className="relative bg-blue-100 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://i.pinimg.com/736x/5c/d4/84/5cd484918815246f6324ea5575c2417e.jpg" 
            alt="Banner 2"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 p-7 md:p-10">
            <p className="text-sm uppercase text-green-600 font-medium mb-1">&</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">100% Sedap</h2>
            <p className="text-gray-700 mb-4">Quality Delicious Food Store</p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">Order Now</button>
          </div>
        </div>
        <div></div>
      </div>
      <AboutSedap/>
      <FooterSedap/>
    </div>
  );
};

export default MenuMakan;
