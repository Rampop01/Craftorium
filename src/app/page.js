import React from "react";
import Navbar from "../components/Navbar";
import {
  FiShoppingBag,
  FiPercent,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import HeroSection from "@/components/HeroSection";
import WelcomeBar from "@/components/WelcomeBar";
import WhyUs from "@/components/WhyUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "@/components/Banner";
import OrderSteps from "@/components/OrderSteps";

const Home = () => {
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

  return (
    <div>
      <Navbar logo={logo} generalLinks={generalLinks} showLogo={true} />
      <WelcomeBar />
      <HeroSection />
      <WhyUs />
      <FeaturedProducts />
      <Banner />
      <OrderSteps />
    </div>
  );
};

export default Home;
