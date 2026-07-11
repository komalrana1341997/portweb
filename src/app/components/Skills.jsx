export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section id="skills" className="relative py-24 px-6 text-white overflow-hidden">

      {/* 🔥 Same Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-[150px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">

        {/* Heading */}
        <h2 className="text-4xl text-gray-400 md:text-5xl font-semibold mb-12">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Skills
          </span>
        </h2>

        {/* Skills */}
        <div className="flex text-gray-400 text-lg font-semibold flex-wrap justify-center gap-4">

          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-2 text-sm md:text-base rounded-full 
              bg-white/5 border border-white/10 
              backdrop-blur-md
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
              hover:text-white hover:scale-105 
              transition duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}