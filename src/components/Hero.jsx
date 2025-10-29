import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Fondo animado */}
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
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <img
            src="/yo.jpg"
            alt="Perfil"
            className="w-40 h-40 rounded-full shadow-lg mb-4 border-4 border-blue-600 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-white">
          Juan Sebastián López Russi
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Desarrollador Web | Backend & Frontend
        </p>
        <a
              href="/sebas.pdf"
              download
              className="px-5 py-2 border border-bllue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-black transition text-sm sm:text-base"
            >
              Descargar CV
            </a>

<a
  href="https://github.com/Russi2204" // 👉 tu enlace de GitHub
  target="_blank" // abre en nueva pestaña
  rel="noopener noreferrer"
  className="px-5 py-2 border border-blue-500 text-blue-400 mt-3 rounded-md hover:bg-blue-500 hover:text-black transition text-sm sm:text-base"
>
  Ver GitHub
</a>
      </div>
    </section>
  );
};

export default Hero;
