import React from "react";
import ProductCard from "../ProductCard";

const MenCollection = () => {
  // Sample men's shoes and bags products
  const mensProducts = [
    {
      id: 1,
      name: "Men's Leather Shoes",
      description: "Elegant leather shoes perfect for formal occasions.",
      price: 150.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729191929/3a15eb93-205b-4771-807e-9caab3475c72_rsnwye.jpg",
    },
    {
      id: 2,
      name: "Men's Travel Bag",
      description:
        "Spacious and durable travel bag with multiple compartments.",
      price: 90.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729191900/a57b2885-9a62-43e5-a72a-58ba2ec7c421_xcaq7n.jpg",
    },
    {
      id: 3,
      name: "Men's Casual Sneakers",
      description: "Comfortable sneakers for daily wear with a modern design.",
      price: 65.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159167/3beaabf0-acdd-45ae-a3a4-79da70642ba2_kdeqze.jpg",
    },
    {
      id: 4,
      name: "Men's Messenger Bag",
      description:
        "Stylish and functional messenger bag for work or casual use.",
      price: 120.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729191950/93088736-d7ee-48b6-950b-dfcd97460054_onxjur.jpg",
    },
    {
      id: 5,
      name: "Men's Messenger Bag",
      description:
        "Stylish and functional messenger bag for work or casual use.",
      price: 140.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729191884/c0d84dd8-2b92-47de-be94-a7aa53846973_epjrnd.jpg",
    },
    {
      id: 6,
      name: "Men's Messenger Bag",
      description:
        "Stylish and functional messenger bag for work or casual use.",
      price: 140.0,
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/7516362/1.jpg?7157",
    },
  ];

  //
  https: return (
    <section id="men" className="py-10 md:mx-16 mx-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Men's Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {mensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenCollection;
