import { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const menuItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F7F1E8]/90 backdrop-blur-md border-b border-[#E7DDCC]">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-serif font-bold text-[#626244]">
            Abi
          </h1>
          <div className="w-3 h-3 rounded-full bg-[#626244]" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative pb-2 transition-all duration-300 ${
                active === item
                  ? "text-[#626244] font-semibold"
                  : "text-gray-700 hover:text-[#626244]"
              }`}
            >
              {item}

              {active === item && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#626244]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setDark(!dark)}
            className="text-2xl text-[#626244]"
          >
            {dark ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <button className="flex items-center gap-2 bg-[#626244] hover:bg-[#505036] transition text-white px-5 py-3 rounded-xl">
            Download CV
            <FiDownload />
          </button>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#F7F1E8] border-t border-[#ddd]">
          <div className="flex flex-col py-5">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className={`py-3 ${
                  active === item
                    ? "text-[#626244] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}

            <div className="flex justify-center mt-4">
              <button className="bg-[#626244] px-5 py-3 rounded-xl text-white flex items-center gap-2">
                Download CV
                <FiDownload />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}