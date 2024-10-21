"use client";
import Navbar from "@/components/Navbar";
import {
  FiShoppingBag,
  FiPercent,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useState } from "react";
import Image from "next/image";
import { products, relatedProducts } from "@/components/Mock";

const ProductDetails = ({ params }) => {
  const product = products.find((prod) => prod.id === params.id);

  if (!product) {
    return <p className="text-6xl text-center p-20">Product not found</p>;
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const logo = "Craftorium";
  const generalLinks = [
    { href: "/shop", name: "Shop", icon: <FiShoppingBag className="mr-2" /> },
    { href: "/deals", name: "Deals", icon: <FiPercent className="mr-2" /> },
    {
      href: "/about",
      name: "About Us",
      icon: <AiOutlineInfoCircle className="mr-2" />,
    },
    {
      href: "/cart",
      name: "Cart",
      icon: (
        <div className="relative flex items-center">
          <FiShoppingCart className="mr-2" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 -mt-1">
            3
          </span>
        </div>
      ),
    },
    { href: "/account", name: "Account", icon: <FiUser className="mr-2" /> },
  ];

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div>
      <Navbar logo={logo} generalLinks={generalLinks} showLogo={true} />
      <div className="container mx-auto md:py-12 py-4 px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full h-96 relative">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Product Details section */}
          <div className="flex flex-col space-y-2 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-700 font-bold">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold">Select Size:</h3>
              <div className="flex space-x-3 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md py-2 px-4 ${
                      selectedSize === size
                        ? "bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 animate-text"
                        : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Select Color:</h3>
              <div className="flex space-x-3 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border rounded-md py-2 px-4 ${
                      selectedColor === color
                        ? "bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 animate-text"
                        : ""
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Quantity:</h3>
              <div className="flex space-x-4 items-center mt-2">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="bg-gray-200 py-2 px-4 rounded-full"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="bg-gray-200 py-2 px-4 rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Total Price:</h3>
              <p className="text-xl font-bold">${totalPrice}</p>
            </div>

            <button className="bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 font-semibold">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-700">${relatedProduct.price}</p>
                  <button className="mt-4 bg-[#92714a] text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#93816b] transition duration-300">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
