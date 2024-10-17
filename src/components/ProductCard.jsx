import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button className="border border-blue-600 text-black px-4 py-2 rounded hover:bg-blue-200 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
