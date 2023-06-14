import React from "react";
import NavBar from "../Components/NavBar";
import Circles from "./../Components/Circles";
import Hero from "./../Components/Hero";
import image from "../assets/hero.jpeg";

const LandingPage = () => {
  return (
    <div className="px-20 h-screen w-full bg-[#F5FFF7] bg-no-repeat  font-lato bg-mobilehero md:bg-hero  bg-cover">
      <NavBar />
      <Hero />
    </div>
  );
};

export default LandingPage;
