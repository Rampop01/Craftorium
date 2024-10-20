import ProductCard from "../ProductCard";

const SyKids = () => {
  const kidsStreetwearCollection = [
    {
      id: 1,
      name: "Kids Street Hoodie",
      description: "Cool and comfortable hoodie for kids.",
      price: "$40",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729424327/WhatsApp_Image_2024-10-16_at_4.15.04_AM-removebg-preview_sl92et.png",
    },
    {
      id: 2,
      name: "Joggers for Kids",
      description: "Stylish jogger pants perfect for daily play.",
      price: "$35",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729424327/WhatsApp_Image_2024-10-16_at_4.15.04_AM-removebg-preview_sl92et.png",
    },
    {
      id: 3,
      name: "Streetwear Jacket",
      description: "Lightweight jacket for a trendy street look.",
      price: "$45",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1729424327/WhatsApp_Image_2024-10-16_at_4.15.04_AM-removebg-preview_sl92et.png",
    },
  ];
  return (
    <div className="py-10 bg-gray-100" id="kids">
      <h2 className="text-center text-4xl font-bold mb-8">
        Kids' Streetwear Collection
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {kidsStreetwearCollection.map((product) => (
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

export default SyKids;
