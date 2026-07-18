

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-700 rounded-full blur-[150px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-purple-700 mb-2">Hey, I'm Komal 👋</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Full Stack <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Developer
            </span>
          </h1>

          <p className="text-gray-600 max-w-md mb-6">
            I craft modern, responsive, and high-performance web apps using React & Next.js.
          </p>

          <div className="flex gap-4">
            <a
              href="/projects"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center relative">

          {/* Profile Glow */}
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>

          {/* Profile Image */}
          <img
            src="/portfolio img.jpeg"
            alt="profile"
            className="w-64 h-64 rounded-full object-cover border-4 border-purple-500"
          />

          {/* Floating Icons */}
          <div className="absolute top-0 left-10 bg-black border border-gray-700 p-2 rounded-full text-xs">
            ⚛️
          </div>

          <div className="absolute bottom-10 right-0 bg-black border border-gray-700 p-2 rounded-full text-xs">
            💻
          </div>

          <div className="absolute top-20 right-10 bg-black border border-gray-700 p-2 rounded-full text-xs">
            🚀
          </div>

        </div>

      </div>

    </section>
  );
}