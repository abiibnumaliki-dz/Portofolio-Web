import {
    HiCode,
    HiOutlineDesktopComputer,
    HiArrowRight,
} from "react-icons/hi"

import {
    HiOutlineAcademicCap
}from "react-icons/hi2"

import {
    FaEthereum
} from "react-icons/fa"

export default function About() {
    return(
        <section id="About" className="bg-[#F7F1E8] dark:bg-[#111827] py-24 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 border border-[#E8DDCC] dark:border-gray-700 rounded-3xl overflow-hidden">
                        {/* Left */}
                    <div className="p-16 flex flex-col justify-center">
                        <span className="uppercase tracking-widest text-sm text-[#7d7555] dark:text-[#D6C99B] font-semibold">About Me</span>
                        <h2 className="text-5xl font-serif font-bold text-[#2c2c2c] dark:text-white mt-5">Get to know me</h2>
                        <p className="mt-8 leading-8 text-gray-600 dark:text-gray-300">I'm a passionate Full-Stack and Web3 Developer dedicated to building 
                            modern, scalable, and secure web applications.
                            I enjoy turning innovative ideas into real-world digital solutions through 
                            clean code, responsive design, and blockchain technology.</p>                        
                        <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300   ">With a strong commitment to continuous learning,
                            I explore emerging technologies to create seamless user experiences while delivering high-quality,
                            maintainable software.</p>
                        <button className="group mt-10 w-fit bg-[#626244] dark:bg-[#7C7755] text-white text-xl px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 ease-in-out hover:bg-[#505036] dark:hover:bg-[#8F8866] hover:-translate-y-1 hover:shadow-xl active:scale-95">
                        More About Me <HiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" /></button>
                    </div>
                   {/* Right */}
                   <div className="bg-[#f2ebde] dark:bg-[#1E293B] p-16 flex flex-col justify-center gap-8 transition-colors duration-500">
                    <FeatureCard 
                    icon={<HiCode/>}
                    title="Clean Code"
                    desc="Clean, maintainable, and scalable code."
                    />

                    <FeatureCard 
                    icon={<HiOutlineDesktopComputer/>}
                    title="Responsive Design"
                    desc="Responsive interfaces for every device."
                    />

                    <FeatureCard 
                    icon={<FaEthereum/>}
                    title="Blockchain Intergration"
                    desc="Secure blockchain-powered web solutions."
                    />

                    <FeatureCard 
                    icon={<HiOutlineAcademicCap/>}
                    title="Continuous Learning"
                    desc="Always learning and improving new skills."
                    />
                   </div>
                </div>
            </div>
        </section>
    );
}
type CardProps = {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

function FeatureCard({ icon, title, desc }: CardProps) {
  return (
    <div className="flex gap-6 group">

      <div
        className="
        w-16
        h-16
        rounded-xl
        bg-white
        dark:bg-[#111827]
        shadow
        flex
        items-center
        justify-center
        text-3xl
        text-[#626244]
        dark:text-[#D6C99B]
        transition-all
        duration-300
        group-hover:scale-110
        "
      >
        {icon}
      </div>

      <div>

        <h3 className="text-xl font-semibold text-[#2c2c2c] dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mt-2 leading-7">
          {desc}
        </p>

      </div>

    </div>
  );
}