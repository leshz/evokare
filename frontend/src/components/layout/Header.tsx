'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingCart, X, Menu } from 'lucide-react';
import { menuMapping } from '@/helpers/menu-mapping';
import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { useCartStore } from '@/store';
import { FEATURE_FLAGS } from '@/constants/feature-flags';

import Link from 'next/link';

import { Navegacion, MenuSection } from '@/services/general/types';

interface HeaderProps {
  content: Navegacion;
  menu: MenuSection[];
}

export const Header: React.FC<HeaderProps> = ({ content, menu }) => {
  const menuContent = menuMapping(menu);
  const pathname = usePathname();

  const { icono } = content;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const items = useCartStore(state => state.items);
  const setIsOpen = useCartStore(state => state.setIsOpen);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (link: string) => {
    if (link === '/') return pathname === '/';
    return pathname.startsWith(link);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-principal/80 shadow-md backdrop-blur-md'
          : 'bg-principal shadow-sm'
      }`}
      style={
        isScrolled
          ? { WebkitBackdropFilter: 'blur(12px)' }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <AdaptiveImage image={icono} width={100} height={100} />
            </Link>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            {menuContent.map(({ id, link, texto, boton }) => {
              const active = isActive(link);
              const buttonClassNames =
                'bg-secundario hover:bg-secundario-light rounded-full px-4 py-2 text-white font-medium transition-all';
              const linkClassNames = `transition-colors ${
                active
                  ? 'text-secundario font-semibold'
                  : 'text-gray-700 hover:text-secundario'
              }`;
              const classNames = boton ? buttonClassNames : linkClassNames;
              return (
                <Link key={id} href={link} className={classNames}>
                  {texto}
                </Link>
              );
            })}
            {FEATURE_FLAGS.CART && (
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-secundario relative transition-colors"
                aria-label="Carrito de compras"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="bg-secundario absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </button>
            )}
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            {FEATURE_FLAGS.CART && (
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-secundario relative transition-colors"
                aria-label="Carrito de compras"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="bg-secundario absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="hover:text-secundario flex items-center text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`bg-principal/95 absolute top-full right-0 left-0 z-50 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
      >
        <nav className="flex flex-col px-4 py-4">
          {menuContent.map(({ id, link, texto, boton }) => {
            const active = isActive(link);
            if (boton) {
              return (
                <Link
                  key={id}
                  href={link}
                  onClick={closeMenu}
                  className="bg-secundario hover:bg-secundario-light mt-4 rounded-full px-4 py-3 text-center font-medium text-white transition-all"
                >
                  {texto}
                </Link>
              );
            }
            return (
              <Link
                key={id}
                href={link}
                onClick={closeMenu}
                className={`border-b border-gray-100 py-3 transition-colors ${
                  active
                    ? 'text-secundario font-semibold'
                    : 'text-gray-700 hover:text-secundario'
                }`}
              >
                {texto}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
