import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <img src="/perfil.jpg" alt="Perfil" className="w-40 h-40 rounded-full shadow-lg mb-4" />
      <h1 className="text-4xl font-bold">Juan Sebastián López Russi</h1>
      <p className="text-lg text-gray-600 mt-2">Desarrollador Web | Backend & Frontend</p>
      <a
        href="#contact"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Contáctame
      </a>
    </section>
  );
};

export default Hero;
