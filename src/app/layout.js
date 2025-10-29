import "./globals.css";

export const metadata = {
  title: "Portafolio | Juan Sebastián López Russi",
  description: "Mi hoja de vida digital y proyectos personales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
