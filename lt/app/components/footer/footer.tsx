"use client";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const ResponsiveFooter = () => {
  return (
    <footer className="bg-[--background] boxShadow rounded-xl w-full p-6 lg:p-9 absolute bottom-0">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap"></div>

        <div className="flex items-center flex-wrap gap-[10px] text-text">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
            <BsLinkedin />
          </a>
        </div>

        <div className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
          <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">
            © 2024 Lifetanks Phippines. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
