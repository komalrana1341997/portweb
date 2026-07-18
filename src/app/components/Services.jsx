export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Modern, responsive websites using React, Next.js & Tailwind.",
      icon: "💻",
    },
    {
      title: "Landing Pages",
      desc: "High-converting landing pages designed to boost sales.",
      icon: "🚀",
    },
    {
      title: "SEO Optimization",
      desc: "Improve Google ranking with fast & optimized websites.",
      icon: "📈",
    },
    {
      title: "Full Stack Apps",
      desc: "Complete web apps with backend, database & auth.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-600">Services</span>
        </h2>

        <p className="text-gray-600 mb-12">
          I help businesses build fast, modern and SEO-optimized websites.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Hire Me 🚀
          </a>
        </div>

      </div>
    </section>
  );
}