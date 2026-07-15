import { skillCategories } from "../../data/Skills";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="bg-[#F7F1E8] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-[#7C7755] font-semibold">
            My Skills
          </span>

          <h2 className="text-5xl font-serif font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A collection of technologies, frameworks, and tools
            I use to design, develop, and deploy modern web applications.
          </p>

        </div>

        <div className="mt-16 space-y-12">

          {skillCategories.map((category) => (

            <div key={category.title}>

              <h3 className="text-2xl font-semibold mb-6 text-[#626244]">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {category.skills.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <div
                      key={skill.name}
                      className="bg-white rounded-2xl border border-[#E8DDCC] p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2"
                    >

                      <Icon className="text-5xl text-[#626244]" />

                      <h4 className="mt-5 font-semibold">
                        {skill.name}
                      </h4>

                    </div>

                  );
                })}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}