import ProductCard from "../ProductCard";

const SyWomen = () => {
  const femaleStreetwearCollection = [
    {
      id: 1,
      name: "Streetwear Hoodie",
      description: "Comfy oversized hoodie with urban street style.",
      price: "$50",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157443/1b4cb35a-8846-438e-a3e7-5250fe6de101_iagpb0.jpg",
    },
    {
      id: 2,
      name: "Jogger Pants",
      description: "Trendy joggers with a relaxed fit for casual outings.",
      price: "$45",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157476/f56f99b4-3e4a-4789-b8ab-f98bc1713d6d_wtcie2.jpg",
    },
    {
      id: 3,
      name: "Urban Jacket",
      description: "Warm puffer jacket perfect for warm street walks.",
      price: "$85",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729437798/161681b5-d2f0-4cdf-a262-e1863d2ba278_gft6xs.jpg",
    },
  ];

  return (
    <div id="women" className="py-10 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-8">
        Women's Streetwear Collection
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {femaleStreetwearCollection.map((product) => (
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
  );
};

export default SyWomen;
