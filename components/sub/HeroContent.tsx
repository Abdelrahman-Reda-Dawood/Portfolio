"use client";
// Framer motion uses react hooks which could only be used in a client component

import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-20">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          // custom css class (Welcome-box)
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity[0.9]"
          variants={slideInFromTop}>
          <SparklesIcon className="h-5 w-5 text-[#bda7ff] mr-[10px]" />
          <h1 // custom css class (Welcome-text)
            className="Welcome-text text-[13px] font-bold">
            Abdelrahman Reda's Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-auto h-auto flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px]">
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m fresh React.js & Next.js web developer with a solid
          foundation in designing and developing frontend apps. Creative and
          detail-oriented in creating platforms that are functional and
          user-friendly. Comfortable with powerful web technologies such as
          Next.js and MERN stack. I am focused on achieving high quality results
          under strict deadlines. Eager to obtain a new position at prestigious
          company to expand my learning and build upon my developer skills
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center">
        <Image
          height={650}
          width={650}
          src="/mainIconsdark.svg"
          alt="work icon"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
