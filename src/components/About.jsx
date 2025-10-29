import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section relative max-w-5xl mx-auto py-20 px-4 text-center">
      {/* Billetes animados */}
      <div className="money-container">
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src="billete.png"
            alt="billete"
            className={`money money-${i}`}
          />
        ))}
      </div>

      {/* Contenido */}
      <h2 className="text-3xl font-bold mb-6 text-blue-600 relative z-10">Sobre mí</h2>
      <p className="text-lg text-gray-200 relative z-10">
        Soy un desarrollador web apasionado por crear aplicaciones modernas,
        seguras y eficientes. Tengo experiencia en tecnologías como React, Node.js,
        Express y MySQL. Me gusta aprender constantemente y enfrentar nuevos retos.
      </p>
    </section>
  );
};

export default About;
