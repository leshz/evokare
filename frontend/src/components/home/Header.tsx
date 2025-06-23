export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-fuchsia-800">EVOKARE</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-fuchsia-800 transition-colors">INICIO</a>
            <a href="#" className="text-gray-700 hover:text-fuchsia-800 transition-colors">NOSOTROS</a>
            <a href="#" className="text-gray-700 hover:text-fuchsia-800 transition-colors">SERVICIOS</a>
            <a href="#" className="text-gray-700 hover:text-fuchsia-800 transition-colors">CONTACTO</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-full hover:bg-fuchsia-900 transition-colors">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 