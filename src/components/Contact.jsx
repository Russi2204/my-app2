import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-600 text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
      <p className="mb-6">¿Quieres trabajar conmigo? Escríbeme:</p>
      <a
        href="mailto:juanlopez@example.com"
        className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        Enviar Correo
      </a>
    </section>
  );
};

export default Contact;
