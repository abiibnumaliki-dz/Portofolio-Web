import { projects } from "../../data/Project"

import { useState } from "react";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

export default function Projects() {

    const categories = [
    "All",
    "Frontend",
    "Dashboard",
    "Landing Page",
    "Web3",
    ];

    const [filter, setFilter] = useState("All");
    const filteredProjects =
    filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section
      id="Projects"
      className="py-28 bg-[#F7F1E8] dark:bg-[#111827] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#626244] dark:text-[#D6C99B] font-semibold">
            My Projects
          </p>

          <h2 className="mt-4 text-5xl font-serif font-bold text-[#2D2D2D] dark:text-white">
            Some Things I've Built
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
            Here are some selected projects that demonstrate my skills in
            frontend development, full-stack applications, responsive design,
            and blockchain integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {categories.map((item) => (

                <button
                key={item}
                onClick={() => setFilter(item)}
                className={`
                    px-5
                    py-2
                    rounded-full
                    transition-all
                    duration-300
                    font-medium

                    ${
                    filter === item
                        ? "bg-[#626244] text-white"
                        : "bg-white dark:bg-[#1E293B] text-gray-700 dark:text-gray-300 hover:bg-[#ECE4D8] dark:hover:bg-[#374151]"
                    }
                `}
                >
                {item}
                </button>

            ))}

            </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
            <div
                key={index}
                className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                dark:bg-[#1E293B]
                border
                border-[#E7DDCC]
                dark:border-gray-700
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                "
            >
                {/* Image */}
                <div className="relative overflow-hidden h-60">
                <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-500
                    "
                />

                <div
                    className="
                    absolute
                    inset-0
                    bg-black/50
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-center
                    justify-center
                    "
                    >

                    <button
                    className=" bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                    Preview
                    </button>

                    </div>
                </div>

                {/* Content */}
                <div className="p-6">

                {/* Category */}
                <p className="text-sm font-semibold uppercase tracking-[3px] text-[#626244] dark:text-[#D6C99B]">
                    {project.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-[#2D2D2D] dark:text-white">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                    {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((item, techIndex) => (
                    <span
                        key={techIndex}
                            className="
                            px-3
                            py-1
                            rounded-full
                            bg-[#ECE4D8]
                            dark:bg-[#374151]
                            text-sm
                            hover:scale-105
                            hover:bg-[#626244]
                            hover:text-white
                            transition
                            "                    >
                        {item}
                    </span>
                    ))}
                </div>

                {/* Button */}
                <div className="flex items-center justify-between mt-8">

                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex hover:scale-105 items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#626244] dark:hover:text-[#D6C99B] transition"
                    >
                    <FaGithub />
                    GitHub
                    </a>

                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex hover:scale-105 items-center gap-2 bg-[#626244] dark:bg-[#7C7755] hover:bg-[#505036] dark:hover:bg-[#8F8866] text-white px-4 py-2 rounded-lg transition"
                    >
                    Live Demo
                    <FaExternalLinkAlt size={12} />
                    </a>

                </div>

                </div>
            </div>
            ))}
        </div>

      </div>
    </section>
  );
}

