"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px]  overflow-hidden my-16">
      {/* Background Image */}
      <div className="absolute inset-0 mx-20">
        <img
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729163048/banner_1_yaugqi.png" // Replace with your banner image path
          alt="Banner Background"
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      </div>

      {/* Banner Content */}
      <div className="relative flex flex-col items-center justify-center w-full h-full text-white -mt-4">
        <h1 className="text-4xl font-bold text-center">
          Discover the Art of Handmade Fashion
        </h1>
        <p className="mt-2 text-lg text-center max-w-xl">
          Experience unique styles and quality craftsmanship with every piece.
        </p>
        <a
          href="#featured-products"
          className="mt-2 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-400 to-blue-400  rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
