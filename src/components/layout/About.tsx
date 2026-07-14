import {
    HiCode,
    HiOutlineDesktopComputer,
    HiLightBulb,
    HiChip,
} from "react-icons/hi"

export default function About() {
    return(
        <section id="about" className="bg-[#f7f1e8] py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 border border-[#e8ddcc]">
                    {/* Left */}
                    <div className="p-16 flex flex-col justify-center">
                        <span className="uppercase tracking-widest text-sm text-[#7d7555] font-semibold">About Me</span>
                        <h2 className="text-5xl font-serif font-bold text-[#2c2c2c] mt-5">Get to know me</h2>
                        <p className="mt-8 leading-8 text-gray-600">blablablandjbsijabonijsbvfodbvndbvsibdijvbihb</p>                        
                        <p className="mt-5 leading-8 text-gray-600">blablablandjbsijabonijsbvfodbvndbvsibdijvbihb</p>
                        <button className="mt-10 w-fit bg-[#626244] text-white text-xl px-8 py-4 rounded-xl hover:bg-[#505036] duration-300">More About Me</button>
                    </div>
                   {/* Right */}
                   <div className="bg-[#f2ebde] p-16 flex flex-col justify-center gap-8">
                    <FeatureCard 
                    icon={<HiCode/>}
                    title="Clean Code"
                    desc="I write Clean code, reusable and maintainable code."
                    />

                    <FeatureCard 
                    icon={<HiOutlineDesktopComputer/>}
                    title="Responsive Design"
                    desc="I write Clean code, reusable and maintainable code."
                    />

                    <FeatureCard 
                    icon={<HiLightBulb/>}
                    title="Problem Solver"
                    desc="I write Clean code, reusable and maintainable code."
                    />

                    <FeatureCard 
                    icon={<HiChip/>}
                    title="Future Tech"
                    desc="I write Clean code, reusable and maintainable code."
                    />
                   </div>
                </div>
            </div>
        </section>
    );
}
type CardProps = {
    icon: React.ReactNode;
    title: String;
    desc: String;
}

function FeatureCard({icon, title, desc}: CardProps){
    return(
        <div className="flex gap-6">
            <div className="w-16 h-16 rounded-xl bg-white shadow flex items-center justify-center text-3xl text-[#626244]">
                {icon}
            </div>

            <div>
            <h3 className="text-xl font-semibold text-[#2c2c2c]">
                {title}
            </h3>
            <p className="text-gray-600 mt-2 leading-7">
                {desc}
            </p>
            </div>
        </div>
    );
}