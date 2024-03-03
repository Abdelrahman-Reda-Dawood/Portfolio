"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { TbHandFinger } from "react-icons/tb";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  return (
    <motion.div
      variants={slideInFromLeft(0.9)}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="aspect-square object-contain rounded-md"
      />
      <div className="relative p-4 z-20 cursor-pointer group اي">
        <Link href={link} target="_blank">
          <div className="flex items-center gap-5 text-white">
            <h1 className="text-2xl font-semibold ">{title}</h1>
            <div className="bg-white rounded-full p-1 text-black group-hover:text-white group-hover:bg-blue-500 group-hover:scale-110 group-hover:animate-bounce transition duration-300 ease-in-out">
              <TbHandFinger size={20} />
            </div>
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
