import React from "react";

const projects = [
  { title: "Sistema de Gestión", desc: "Aplicación CRUD con Node.js y MySQL" },
  { title: "Portafolio Personal", desc: "Sitio web con Next.js y Tailwind CSS" },
  { title: "API REST", desc: "Autenticación JWT con Express y MySQL" },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Proyectos</h2>
        <div className="grid md:grid-cols-3 text-black gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
