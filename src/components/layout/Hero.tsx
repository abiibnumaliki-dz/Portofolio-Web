import profile from "../../assets/profile.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center bg-[#F7F1E8] dark:bg-[#111827] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          {/* Left */}
          <div className="flex-1">

            <p className="text-2xl text-[#7C7755] dark:text-[#D6C99B] mb-4">
              Halo, Saya
            </p>

            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-[#2D2D2D] dark:text-white leading-tight">
              Abi Ibnu <br /> Maliki
            </h1>

            <h2 className="text-3xl font-semibold text-[#626244] dark:text-[#D6C99B] mt-6">
              Web3 Developer • Full-Stack Developer • Blockchain Enthusiast
            </h2>

            <p className="mt-8 text-gray-600 dark:text-gray-300 leading-8 max-w-xl">
              Building modern, scalable, and responsive web applications with
              seamless blockchain integration, clean architecture, and
              exceptional user experiences.
            </p>

            {/* Button */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button
                onClick={() =>
                  document
                    .getElementById("Projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  bg-[#626244]
                  dark:bg-[#7C7755]
                  hover:bg-[#505036]
                  dark:hover:bg-[#8F8866]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                Preview Project
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("Contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  border-2
                  border-[#626244]
                  dark:border-[#D6C99B]
                  text-[#2D2D2D]
                  dark:text-white
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-[#626244]
                  hover:text-white
                  dark:hover:bg-[#7C7755]
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </button>

            </div>

            {/* Social */}
            <div className="flex gap-7 mt-12 text-3xl text-[#444444] dark:text-gray-300">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#626244] dark:hover:text-[#D6C99B] transition-colors duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#626244] dark:hover:text-[#D6C99B] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#626244] dark:hover:text-[#D6C99B] transition-colors duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:youremail@gmail.com"
                className="hover:text-[#626244] dark:hover:text-[#D6C99B] transition-colors duration-300"
              >
                <MdEmail />
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-[#E6DDCF] dark:bg-[#2B3445] rounded-[180px] scale-105 blur-sm transition-colors duration-500"></div>

              <img
                src={profile}
                alt="Profile"
                className="
                  relative
                  w-[430px]
                  h-[550px]
                  object-cover
                  rounded-t-[220px]
                  rounded-b-xl
                  border-[7px]
                  border-white
                  dark:border-gray-700
                  shadow-2xl
                "
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}