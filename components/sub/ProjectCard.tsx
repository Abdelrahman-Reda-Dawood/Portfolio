"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  return (
    <motion.div
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="aspect-square object-contain rounded-md"
      />
      <div className="relative p-4 cursor-pointer z-20 group">
        <Link href={link} target="_blank">
          <div className="relative flex items-center gap-5 text-white ">
            <h1 className="text-2xl font-semibold line-clamp-2">{title}</h1>
            <div className="bg-white rounded-full p-1 text-black group-hover:text-white group-hover:bg-blue-500 group-hover:scale-110 group-hover:animate-bounce transition duration-300 ease-in-out">
              <FiExternalLink size={18} />
            </div>
          </div>

          <div className="relative group items-center">
            <p className="text-white line-clamp-3">
              {description}
              <span className="absolute z-10 border opacity-0 bg-black text-white text-center rounded-lg py-2 px-3 w-full bottom-full -left-1/2 mx-[50%] group-hover:opacity-100 transition duration-500">
                {description}
                <svg
                  className="absolute text-white h-2 w-full left-0 top-full"
                  viewBox="0 0 255 255"
                  xmlns="http://www.w3.org/2000/svg">
                  <polygon
                    className="fill-current  transition duration-200"
                    points="0,0 127.5,127.5 255,0"
                  />
                </svg>
              </span>
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
