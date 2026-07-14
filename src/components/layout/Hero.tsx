import profile from "../../assets/profile.jpeg";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Hero() {
    return(
        <section id="home" className="min-h-screen flex items-center bg-[#f7f1e8">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
                { /* Left */ }
                    <div className="flex-1">
                        <p className="text-2xl text-[#7c7755] mb-4">Halo, Saya</p>
                        <h1 className="text-6xl lg:text-7xl font-serif font-bold text-[#2d2d2d] leading-tight">Abi Ibnu <br />Maliki</h1>

                        <h2 className="text-3xl text-[#626244] font-semibold mt-6">Web3 Developer, Fullstack Developer & Crypto Enthusiast</h2>
                        <p className="mt-8 text-gray-600 leading-8 max-w-xl">
                            Build your Web with Blockchain Integration, Responsive, adn user friendly.  Web with future tech, clean code, and elegant design.
                        </p>
                { /* Button */ }
                    <div className="flex gap-5 mt-10">
                        <button className="bg-[#626244] text-white px-8 py-4 rounded-xl hover:bg-[#505036] transition">Preview Project</button>
                        <button className="border-2 border-[#626244] px-8 py-4 rounded-xl hover:bg-[#626244] hover:text-white transition">Contact me</button>
                    </div>
                { /* Social */ }  
                    <div className="flex gap-7 mt-12 text-3xl text-[#444]">
                        <FaGithub className="hover:text-[#626244] cursor-pointer duration-300" />
                        <FaLinkedin className="hover:text-[#626244] cursor-pointer duration-300" />
                        <FaInstagram className="hover:text-[#626244] cursor-pointer duration-300" />
                        <MdEmail className="hover:text-[#626244] cursor-pointer duration-300" />
                    </div>
                    </div>
                {/* Right */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#e6ddcf] rounded-[180px] scale-105 blur-sm"></div>
                            <img src={profile} alt="Profile" className="relative w-107.5 h-137.5 object-cover rounded-t-[220px] rounded-b-xl border-7 border-white shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}