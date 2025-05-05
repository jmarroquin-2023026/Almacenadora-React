import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-5 fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 dark:border-gray-700 z-40">
      <ul className="space-y-2">
        <li>
          <Link 
            to="/" 
            className="block py-2 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link 
            to="/products" 
            className="block py-2 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link 
            to="/register" 
            className="block py-2 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            Registrarse
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;