import React from "react";
import "./About.css";

const About = () => {
  return (
<section id="about" className="about-section relative w-full py-20 px-4 text-center overflow-hidden">
  {/* Billetes animados */}
  <div className="money-container absolute inset-0">
    {[...Array(10)].map((_, i) => (
      <img
        key={i}
        src="billete.png"
        alt="billete"
        className={`money money-${i} absolute`}
      />
    ))}
  </div>

  {/* Contenido centrado */}
  <div className="relative z-10 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-blue-600">Sobre mí</h2>
    <p className="text-lg text-gray-200">
      Soy un desarrollador web apasionado por crear aplicaciones modernas,
      seguras y eficientes. Tengo experiencia en tecnologías como React, Node.js,
      Express y MySQL. Me gusta aprender constantemente y enfrentar nuevos retos.
    </p>
  </div>
</section>

  );
};

export default About;
