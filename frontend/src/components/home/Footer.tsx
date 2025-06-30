export function Footer() {
  return (
    <footer className="bg-secundario text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">EVOKARE</div>
            <p className="text-principal mb-6">
              Tu compañero en el camino hacia el bienestar mental. Ofrecemos apoyo profesional,
              recursos educativos y una comunidad de cuidado para ayudarte a alcanzar tu mejor versión.
            </p>
            <button className="bg-white text-secundario px-6 py-3 rounded-full hover:bg-principal transition-colors font-medium">
              Comenzar Ahora
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-principal">
              <li><a href="#" className="hover:text-white transition-colors">Terapia Individual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apoyo Grupal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recursos Digitales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programas Especializados</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-principal">
              <li>info@evokare.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Lun - Vie: 9:00 - 18:00</li>
              <li>Emergencias: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-terciario mt-12 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-principal hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-principal hover:text-white transition-colors">Términos de Servicio</a>
          </div>
          <p className="text-principal">© 2024 Evokare. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 