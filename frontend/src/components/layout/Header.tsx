'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-principal relative shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="ELisa" width={100} height={100} />
            {/* <div className="text-2xl font-bold text-secundario">ELisa</div> */}
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="hover:text-secundario text-gray-700 transition-colors"
            >
              INICIO
            </Link>
            <Link
              href="/nosotros"
              className="hover:text-secundario text-gray-700 transition-colors"
            >
              NOSOTROS
            </Link>
            <Link
              href="/productos"
              className="hover:text-secundario text-gray-700 transition-colors"
            >
              PRODUCTOS
            </Link>
            <Link
              href="/blogs"
              className="hover:text-secundario text-gray-700 transition-colors"
            >
              BLOGS
            </Link>
            <Link
              href="/contacto"
              className="hover:text-secundario text-gray-700 transition-colors"
            >
              CONTACTO
            </Link>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-4 py-2 text-white transition-all hover:bg-gradient-to-br">
              Comenzar
            </button>
          </nav>
          <button
            onClick={toggleMenu}
            className="hover:text-secundario flex items-center p-2 text-gray-700 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              <span
                className={`block h-0.5 w-5 transform bg-current transition-all duration-300 ${isMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-1'}`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`block h-0.5 w-5 transform bg-current transition-all duration-300 ${isMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-1'}`}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`bg-principal absolute top-full right-0 left-0 shadow-lg transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="hover:text-secundario border-b border-gray-100 py-3 text-gray-700 transition-colors"
            >
              INICIO
            </Link>
            <Link
              href="/nosotros"
              onClick={closeMenu}
              className="hover:text-secundario border-b border-gray-100 py-3 text-gray-700 transition-colors"
            >
              NOSOTROS
            </Link>
            <Link
              href="/productos"
              onClick={closeMenu}
              className="hover:text-secundario border-b border-gray-100 py-3 text-gray-700 transition-colors"
            >
              PRODUCTOS
            </Link>
            <Link
              href="/blogs"
              onClick={closeMenu}
              className="hover:text-secundario border-b border-gray-100 py-3 text-gray-700 transition-colors"
            >
              BLOGS
            </Link>
            <Link
              href="/contacto"
              onClick={closeMenu}
              className="hover:text-secundario border-b border-gray-100 py-3 text-gray-700 transition-colors"
            >
              CONTACTO
            </Link>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario mt-4 rounded-full bg-gradient-to-br px-4 py-3 text-white transition-all hover:bg-gradient-to-br">
              Comenzar
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
