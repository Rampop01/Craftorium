import ProductCard from "../ProductCard";

const SyWomen = () => {
  const femaleStreetwearCollection = [
    {
      id: 1,
      name: "Streetwear Hoodie",
      description: "Comfy oversized hoodie with urban street style.",
      price: "$50",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729159637/ab9103e0-e8fd-437c-b705-3f9e48688588_toqege.jpg",
    },
    {
      id: 2,
      name: "Jogger Pants",
      description: "Trendy joggers with a relaxed fit for casual outings.",
      price: "$45",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729157313/48d390d5-e67a-45c2-982f-3e13f32e8b16_d8qn1n.jpg",
    },
    {
      id: 3,
      name: "Urban Puffer Jacket",
      description: "Warm puffer jacket perfect for cold street walks.",
      price: "$85",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729438143/6510236b-ab0e-4bd7-96b7-731dfba07c45_oejusa.jpg",
    },
  ];

  return (
    <div className="py-10 bg-gray-100" id="men">
      <h2 className="text-center text-4xl font-bold mb-8">
        Men's Streetwear Collection
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
