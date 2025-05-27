import React from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain bg-gray-50"
      />

      <div className="text-center py-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>

        <div className="flex justify-center py-1 text-green-500">
          {Array(product.rating).fill(0).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        <p className="text-gray-600">${product.price.toFixed(2)}</p>

        <div className="flex justify-center space-x-3 mt-4">
          <button className="bg-green-500 p-2 rounded-full text-white"><Eye size={18} /></button>
          <button className="bg-green-500 p-2 rounded-full text-white"><Heart size={18} /></button>
          <button className="bg-green-500 p-2 rounded-full text-white"><ShoppingCart size={18} /></button>
        </div>
      </div>
    </div>
  );
}
