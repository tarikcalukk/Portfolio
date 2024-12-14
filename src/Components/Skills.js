import React from "react";
import { skills } from "../data";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { skillIcons } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BadgeCheckIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>

        {}
        {Object.keys(skills).map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-bold text-white mb-4">{category}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {skills[category].map((skill) => (
                <div
                  key={skill}
                  className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-blue-600 transform hover:scale-110 cursor-pointer"
                >
                  <img
                    src={`/${skillIcons[skill]}`}
                    alt={skill}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity duration-200">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
