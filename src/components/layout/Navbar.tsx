import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const menuItems = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Skills",
    href: "#Skills",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Experience",
    href: "#Experience",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const [active, setActive] = useState("Home");

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#F7F1E8]/90
      dark:bg-[#111827]/90
      backdrop-blur-md
      border-b
      border-[#E7DDCC]
      dark:border-gray-700
      transition-all
      duration-300
    "
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#Home"
          onClick={() => setActive("Home")}
          className="flex items-center gap-2"
        >
          <h1 className="text-4xl font-serif font-bold text-[#626244] dark:text-white transition-colors">
            Abi
          </h1>

          <div className="w-3 h-3 rounded-full bg-[#626244] dark:bg-[#D6C99B]" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`relative pb-2 font-semibold transition-all duration-300 ${
                active === item.name
                  ? "text-[#626244] dark:text-[#D6C99B]"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#626244] dark:hover:text-[#D6C99B]"
              }`}
            >
              {item.name}

              {active === item.name && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#626244] dark:bg-[#D6C99B]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-5">

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="
              p-2
              rounded-lg
              transition-all
              duration-300
              text-[#626244]
              dark:text-yellow-300
              hover:bg-[#E7DDCC]
              dark:hover:bg-gray-700
            "
          >
            {darkMode ? (
              <HiOutlineSun className="text-2xl" />
            ) : (
              <HiOutlineMoon className="text-2xl" />
            )}
          </button>

          {/* Download */}
          <a
            href="/cv.pdf"
            download
            className="
              flex
              items-center
              gap-2
              bg-[#626244]
              dark:bg-[#7C7755]
              hover:bg-[#505036]
              dark:hover:bg-[#8F8866]
              text-white
              px-5
              py-3
              rounded-xl
              transition-all
              duration-300
            "
          >
            Download CV
            <FiDownload />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-[#626244] dark:text-white"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            lg:hidden
            bg-[#F7F1E8]
            dark:bg-[#111827]
            border-t
            border-[#E7DDCC]
            dark:border-gray-700
            transition-all
            duration-300
          "
        >
          <div className="flex flex-col py-5">

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`py-3 text-center transition-all ${
                  active === item.name
                    ? "text-[#626244] dark:text-[#D6C99B] font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#626244] dark:hover:text-[#D6C99B]"
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="flex justify-center mt-4">
              <button
                onClick={toggleTheme}
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                  justify-center
                  text-[#626244]
                  dark:text-yellow-300
                "
              >
                {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <div className="flex justify-center">
              <a
                href="/cv.pdf"
                download
                className="
                  flex
                  items-center
                  gap-2
                  bg-[#626244]
                  dark:bg-[#7C7755]
                  hover:bg-[#505036]
                  dark:hover:bg-[#8F8866]
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  transition-all
                "
              >
                Download CV
                <FiDownload />
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}