"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mi Portafolio</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-blue-600">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Proyectos</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
