import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-gray-100 py-16  md:py-24 md:px-32 overflow-hidden flex h-[70vh] gap-8">
      {/* Text Section */}
      <div className=" max-w-lg mx-auto text-center md:text-left md:max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
          Elevate Your Look <br />
          <span className="text-[#92714a]">with SY Fashion</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest in fashion trends, carefully curated for modern
          elegance. Be the showstopper with every outfit.
        </p>
        <button className="bg-[#92714a] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#93816b] transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="border border-[#92714a] rounded-l-full ">
        <Image
          src="https://res.cloudinary.com/dxswouxj5/image/upload/v1729428896/stylish-adult-woman-holding-shopping-bags-with-copy-space-removebg-preview_yt2d8y.png"
          alt="SY Fashion Model"
          priority
          width={200}
          height={200}
          className="h-[400px] w-[800px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
