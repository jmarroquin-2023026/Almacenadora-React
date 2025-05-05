import React from 'react'

import welcomeImage from '../img/Home.jpeg' // ruta de imagen local

export const Home = () => {
  return (
    <div className="rounded-xl min-h-screen flex flex-col items-center justify-center px-4">
      <img src={welcomeImage} alt="Bienvenida" className=" h-85 mb-6 mt-3 rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Bienvenido a nuestra Almacenadora</h1>
      <p className="text-lg text-gray-400 mb-6 text-center">
      "Todo lo que necesitas, en un solo lugar. Productos esenciales, precios accesibles y disponibilidad inmediata. ¡Encuentra, elige y lleva lo que buscas!"
      </p>
    </div>
  )
}
