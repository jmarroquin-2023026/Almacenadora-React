import React from 'react';

const Link = ({ to, children }) => (
  <a
    href={to}
    className="block py-2 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
  >
    {children}
  </a>
);

const Sidebar = () => {
  return (
    <aside className="w-48 bg-gray-100 dark:bg-gray-800 p-5 h-[calc(100vh-4rem)] fixed top-16 left-0 shadow-md rounded-r-lg overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <ul className="list-none p-0 space-y-2">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-gray-800 dark:bg-gray-950 text-white p-4 h-16 fixed top-0 left-0 w-full z-10 shadow-md rounded-b-lg border-b border-gray-700 dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center h-full">
          <span className="text-xl font-bold">Mi Aplicación</span>
          <div>
            <a
              href="#login"
              className="px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 text-gray-200 dark:text-gray-300"
            >
              Iniciar sesión
            </a>
            <a
              href="#register"
              className="px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 text-gray-200 dark:text-gray-300"
            >
              Registrarse
            </a>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        <Sidebar />
        <main className="ml-48 p-8 flex-grow bg-gray-50 dark:bg-gray-900">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Área de Contenido Principal
          </h1>
          <p className="text-gray-700 dark:text-gray-400 mt-2">
            Aquí es donde se mostrará el resto del contenido de tu aplicación.
          </p>
          <div className="mt-4 space-y-2">
            {[...Array(20)].map((_, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-500">
                Este es un contenido de ejemplo línea {i + 1} para demostrar el
                desplazamiento.
              </p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};