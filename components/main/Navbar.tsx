import { Socials } from "@/constants";
import Image from "next/image";
import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10 sm:px-5">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogoI.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Frontend Developer
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] md:mr[5px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer hover:scale-110 transition duration-200">
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:scale-110 transition duration-200">
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:scale-110 transition duration-200">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row md:gap-5 gap-2">
          {Socials.map((social) => (
            <a className="cursor-pointer" href={social.to} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
