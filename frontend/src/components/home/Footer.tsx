export function Footer() {
  return (
    <footer className="bg-fuchsia-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ponte En Contacto</h3>
            <p className="text-fuchsia-200 mb-6">
              ¿Listo para comenzar tu camino hacia una mejor salud mental? Contáctanos hoy para programar tu consulta.
            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-fuchsia-800 px-6 py-3 rounded-full hover:bg-fuchsia-50 transition-colors font-medium">
                Suscribirse
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-fuchsia-200">
              <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Información de Contacto</h4>
            <ul className="space-y-2 text-fuchsia-200">
              <li>📧 info@evokare.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 Calle Bienestar 123, Ciudad Salud</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-fuchsia-700 mt-12 pt-8 text-center">
          <div className="text-2xl font-bold mb-4">EVOKARE</div>
          <p className="text-fuchsia-200">© 2024 Evokare. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 