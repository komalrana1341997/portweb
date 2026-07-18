"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Komal.dev
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="/about" className="hover:text-white font-semibold transition">About</a>
          <a href="/project" className="hover:text-white font-semibold transition">Projects</a>
          <a href="/services" className="hover:text-white font-semibold transition">Services</a>
          <a href="/blog" className="hover:text-white font-semibold transition">Blog</a>
          <a href="/contact" className="hover:text-white font-semibold transition">Contact</a>
        </div>

        {/* Button */}
        <a
          href="/contact"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
        >
          Hire Me
        </a>

      </div>
    </nav>
  );
}