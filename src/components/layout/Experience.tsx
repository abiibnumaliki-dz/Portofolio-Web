import { experiences } from "../../data/Experience";
import {  HiBriefcase  } from "react-icons/hi";

export default function experience () {
    return (
        <section id="experience"
        className="py-24 bg-[#f7f1e8] dark:bg-[#111827] transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6">
               { /*Section*/ }
                <div className="text-center">
                    <span className="uppercase tracking-[4px] text-[#7c7755] dark:text-[#d6c99b] font-semibold">
                        Experience
                    </span>
                    <h2 className="mt-4 text-5xl font-serif font-bold text-[#2d2d2d] dark:text-white">
                        My profesional journey
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
                        My Academic backgorund and decelopment journey  in software engineering, web development, and blockchain technology.
                    </p>
                </div>
                { /*Timeline*/ }
                <div className="relative mt-20">
                { /*Vertical*/ }   
                    <div className="absolute left-6 top-0 bottom-0 w-2 bg-[#d6c99b] dark:bg-[#626244]"></div>
                    <div className="space-y-14">
                        {experiences.map((item, index) => (

                        <div
                            key={index}
                            className="relative flex gap-8 group"
                        >
                            { /*Circle*/ }
                            <div
                            className="
                            z-10
                            flex
                            items-center
                            justify-center
                            w-12
                            h-12
                            rounded-full
                            bg-[#626244]
                            dark:bg-[#D6C99B]
                            text-white
                            dark:text-[#111827]
                            shadow-lg
                            group-hover:scale-110
                            transition-all
                            duration-300
                            "
                            >
                            <HiBriefcase className="text-xl" />
                            </div>
                            { /*Card*/ }
                            <div
                            className="
                            flex-1
                            bg-white
                            dark:bg-[#1E293B]
                            border
                            border-[#E8DDCC]
                            dark:border-gray-700
                            rounded-2xl
                            p-7
                            shadow-md
                            hover:shadow-xl
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            "
                            >
                            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#7C7755] dark:text-[#D6C99B]">
                                {item.year}
                            </span>

                            <h3 className="mt-2 text-2xl font-bold text-[#2D2D2D] dark:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-[#626244] dark:text-[#D6C99B] font-medium">
                                {item.company}
                            </p>

                            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                                {item.description}
                            </p>

                            </div>

                        </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}