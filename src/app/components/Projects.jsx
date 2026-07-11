export default function Projects() {
  const projects = [
    {
      title: "Linkify (Linktree Clone)",
      desc: "Full-stack link-in-bio platform with analytics, custom themes, and user dashboard.",
      tech: ["Next.js", "MongoDB", "Tailwind"],
      live: "https://linkify-1d1k.vercel.app/",
      github: "https://github.com/komalrana1341997/Linkify"
    },
    {
      title: "Business Landing page",
      desc: "Track daily expenses with real-time updates and a clean, responsive UI.",
      tech: ["React", "Tailwind"],
      live: "https://webnexa-eta.vercel.app/#work",
      github: "https://github.com/komalrana1341997/webnexa"
    },
    {
      title: "URL Shortener",
      desc: "Shorten URLs with tracking system, redirect logic, and database integration.",
      tech: ["Next.js", "MongoDB"],
      live: "https://url-shortener-komal-rana.vercel.app/",
      github: "https://github.com/komalrana1341997/URL---Shortener"
    }
  ];

  return (
    <section id="projects" className="relative bg-black py-24 px-6 text-white overflow-hidden">

      {/* 🔥 Same Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-[150px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl  font-semibold text-center mb-16">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            Projects
          </span>
        </h2>

        {/* Cards */}
        <div className="grid cursor-pointer md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 
              hover:scale-[1.03] hover:border-purple-500/40 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-xl  font-semibold mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className=" text-sm leading-relaxed mb-5">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1  text-center text-sm py-2 rounded-lg 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  hover:opacity-90 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex-1 text-center text-sm py-2 rounded-lg 
                  border border-white/20 hover:border-white/40 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}