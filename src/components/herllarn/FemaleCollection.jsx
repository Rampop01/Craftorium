import React from "react";
import ProductCard from "../ProductCard"; // Adjust path accordingly

const FemaleCollection = () => {
  // Sample women's shoes and bags products
  const womensProducts = [
    {
      id: 1,
      name: "Women's Combo",
      description: "Stylish bags and flat slippers perfect for casual wears.",
      price: 120.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729188318/b45950b6-3eb1-45e0-9ac5-32163d9e41b5_fppnht.jpg",
    },
    {
      id: 2,
      name: "Women's Handbag",
      description: "Elegant handbag with a modern design for any occasion.",
      price: 80.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729188589/d099de98-5283-4739-8b15-9cea300b78ab_m8slra.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Women's Sneakers",
      description: "Comfortable and trendy sneakers for daily wear.",
      price: 70.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159097/bfcfc6b7-da2c-4054-bfbb-89a1a1f85c11_xequu3.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Women's Crossbody Bag",
      description: "Compact crossbody bag with a minimalist design.",
      price: 60.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729188305/b34bb2df-5749-4b6b-9cdc-71673a6b0a15_zio0ux.jpg", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Women's Crossbody Bag",
      description: "Compact crossbody bag with a minimalist design.",
      price: 60.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729193703/eaaa8719-bad1-4684-a74a-55482dc2da7e_ilqxpk.jpg",
    },
    {
      id: 6,
      name: "Women's Crossbody Bag",
      description: "Compact crossbody bag with a minimalist design.",
      price: 60.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729193734/b0ec5440-db0c-480e-b152-262adaf9836c_r2klhn.jpg",
    },
    {
      id: 7,
      name: "Women's Crossbody Bag",
      description: "Compact crossbody bag with a minimalist design.",
      price: 60.0,
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729193731/2341333d-4cb8-4807-8b3a-2b85b8c7534b_zsqkge.jpg",
    },
  ];

  return (
    <section id="women" className="py-10 md:mx-16 mx-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 ">
          Women's Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {womensProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FemaleCollection;
