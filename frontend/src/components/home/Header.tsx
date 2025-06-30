'use client';

import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-principal shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-secundario">EVOKARE</div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-secundario transition-colors">INICIO</a>
            <a href="#" className="text-gray-700 hover:text-secundario transition-colors">NOSOTROS</a>
            <a href="#" className="text-gray-700 hover:text-secundario transition-colors">SERVICIOS</a>
            <a href="#" className="text-gray-700 hover:text-secundario transition-colors">CONTACTO</a>
            <button className="bg-secundario text-white px-4 py-2 rounded-full hover:bg-terciario transition-colors">
              Comenzar
            </button>
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 text-gray-700 hover:text-secundario transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
        <div className={`md:hidden absolute top-full left-0 right-0 bg-principal shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col py-4 px-4">
            <a href="#" onClick={closeMenu} className="text-gray-700 hover:text-secundario transition-colors py-3 border-b border-gray-100">INICIO</a>
            <a href="#" onClick={closeMenu} className="text-gray-700 hover:text-secundario transition-colors py-3 border-b border-gray-100">NOSOTROS</a>
            <a href="#" onClick={closeMenu} className="text-gray-700 hover:text-secundario transition-colors py-3 border-b border-gray-100">SERVICIOS</a>
            <a href="#" onClick={closeMenu} className="text-gray-700 hover:text-secundario transition-colors py-3 border-b border-gray-100">CONTACTO</a>
            <button className="bg-secundario text-white px-4 py-3 rounded-full hover:bg-terciario transition-colors mt-4">
              Comenzar
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 