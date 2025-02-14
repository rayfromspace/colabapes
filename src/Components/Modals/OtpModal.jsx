import React from "react";

import otpmodal from "../../assets/ModalImages/otpmodal.png";
import logo from "../../assets/ModalImages/logo.png";
import { BsArrowLeft } from "react-icons/bs";

const OtpModal = ({
  openOtpmodalprop,
  setopenOtpmodalprop,
  setopenverifiedmodalprop,
}) => {
  return (
    <div
      className={
        openOtpmodalprop
          ? "flex flex-col  w-full lg:grid lg:grid-cols-2 gap-x-10"
          : "hidden"
      }
    >
      <img
        src={otpmodal}
        alt=""
        className=" object-cover hidden lg:block lg:h-[30rem] xl:h-[30rem] rounded-2xl"
      />
      <div className="flex flex-col items-center w-[19rem] h-[30rem] md:w-full md:h-full">
        <img
          src={logo}
          alt=""
          className="w-[5rem] sm:w-[6rem] object-contain "
        />
        <div className="flex items-center  w-full">
          <BsArrowLeft className="mt-3 cursor-pointer text-xl" />
          <p className="text-[#555555] font-bold text-center mt-1 md:mt-4 lg:mt-2 w-full">
            Verify Email
          </p>
        </div>
        <div className="mt-4 text-[#3B8004] text-sm font-semibold">
          Enter 4 - digit code sent to johndoe@email.com
        </div>
        <button
          onClick={() => {
            setopenOtpmodalprop(false);
            setopenverifiedmodalprop(true);
          }}
          className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] w-full rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-4  text-white "
        >
          Verify email
        </button>
        <p className="text-xs">
          Already have an account?
          <a className="text-[#054E12]"> Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default OtpModal;
