import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants"; // Assuming technologies contains name and icon

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-36 h-36 flex justify-center items-center relative group"
        >
          {/* Background Container matching the ExperienceCard style */}
          <div className="w-full h-full flex justify-center items-center overflow-hidden bg-[#1d1836] rounded-lg shadow-md transform transition-all duration-300 ease-in-out group-hover:scale-105">
            {/* Icon Image with smooth scaling transition */}
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain transition-all duration-300 ease-in-out"
            />
          </div>
          {/* Technology Name with fade-in on hover */}
          <p className="absolute bottom-2 text-white font-semibold text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
