import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MySQL", "Git"];

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Habilidades</h2>
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
    </section>
  );
};

export default Skills;
