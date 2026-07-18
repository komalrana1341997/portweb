export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/50 text-black">
      <div className="max-w-4xl mx-auto text-center">

        {/* Main Identity */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Full Stack Developer 🚀
        </h2>

        {/* Short Bio */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I build fast, scalable, and clean web applications using 
          <span className="text-black font-medium"> React, Next.js, Node.js, and MongoDB</span>.
        </p>

        {/* Value Statement */}
        <p className="text-gray-600 leading-relaxed mb-10">
          I turn ideas into real-world products with a focus on performance, simplicity, and user experience.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React",
            "Next.js",
            "Tailwind",
            "Node.js",
            "MongoDB",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm 
              bg-gradient-to-r from-purple-500/20 to-pink-500/20 
              border border-purple-500/30 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}