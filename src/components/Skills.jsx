import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MySQL", "Git"];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-20 px-4 bg-gray-100">
      {/* Contenedor centrado */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Habilidades</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 text-black px-4 py-2 rounded-full font-medium shadow-sm hover:bg-blue-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
