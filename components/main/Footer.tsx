import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* First Column */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-40">
            <div className="font-bold text-[16px]">Contact Me</div>
            <Link
              target="_blank"
              href="mailto:abdelrahman.dawood.265@gmail.com"
              className="flex items-center my-[10px] cursor-pointer">
              <MdOutlineMailOutline />
              <span className="text-[15px] ml-[6px]">
                abdelrahman.dawood.265@gmail.com
              </span>
            </Link>
            <Link
              href="https://twitter.com/BigDealDawood"
              target="_blank"
              className="flex items-center my-[15px] cursor-pointer">
              <BsTwitter />
              <span className="text-[15px] ml-[6px]">BigDealDawood</span>
            </Link>
          </div>
          {/* Second Column
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex items-center my-[15px] cursor-pointer">
              <MdOutlineMailOutline />
              <span className="text-[15px] ml-[6px]">abdelrahman.dawood.265@gmail.com</span>
            </p>
            <p className="flex items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div> */}
          {/* Third Column
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className=" my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+01114595373</span>
            </p>
            <p className=" my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className=" my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div> */}
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Fronend Dev 2023. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
