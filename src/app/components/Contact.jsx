"use client"
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent ✅");
      setName("");
      setEmail("");
      setMessage("");
    
  } else {
    alert("Error ❌");
}
  };


return (
  <section id="contact" className="relative py-24 px-6 text-white overflow-hidden">

    {/* 🔥 Same Glow Background */}
    <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px]"></div>
    <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[150px] opacity-20 bottom-[-100px] right-[-100px]"></div>

    <div className="relative max-w-3xl mx-auto text-center z-10">

      {/* Heading */}
      <h2 className="text-4xl text-gray-400 md:text-5xl font-semibold mb-6">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Me
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-400 font-bold mb-10">
        Have a project in mind or want to collaborate? Let’s build something great together.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col gap-4">

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="bg-transparent border border-black/30 rounded-lg px-4 py-3 outline-none 
            focus:border-purple-500 transition text-black placeholder-gray-600"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="bg-transparent border border-black/30 rounded-lg px-4 py-3 outline-none 
            focus:border-purple-500 transition text-black placeholder-gray-600"
        />

        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="bg-transparent border border-black/30 rounded-lg px-4 py-3 outline-none 
            focus:border-purple-700 transition text-black placeholder-gray-600"
        ></textarea>

        <button
        onSubmit={handleSubmit}
          type="submit"
          className="mt-2 py-3 cursor-pointer rounded-lg font-medium 
            bg-gradient-to-r from-purple-500 to-pink-500 
            hover:opacity-90 transition"
        >
          Send Message
        </button>

      </form>

      {/* Direct Contact */}
      <div className="mt-8 text-black text-sm">
        or email me directly at{" "}
        <span className="text-gray-600">komalrana2019@gmail.com</span>
      </div>

    </div>
  </section>
);
}