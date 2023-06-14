import React from "react";
import NavBar from "../Components/NavBar";
import Circles from "./../Components/Circles";

const LandingPage = () => {
  return (
    <div className="px-20 h-full w-full bg-[#F5FFF7] font-lato">
      <NavBar />
      <Circles />
      <div className="grid md:grid-cols-2 px-40 mt-32">
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="text-main text-xl">Coming soon</p>
            <div className=" bg-[#3B8004] w-[20rem] h-[0.2rem]"></div>
          </div>
          <p className="text-2xl text-main mt-3">
            Unlock Your Digital Team: Find, Collaborate, and Build the Future
            Together
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
