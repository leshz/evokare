import { BlocksRendererCustom } from "@/components/commons/BlocksRendererCustom";

import { FooterProps } from "./types";


export const Footer = ({ footer }: FooterProps) => {
  const { autor } = footer



  return (
    <footer className="from-secundario to-terciario m-4 rounded-2xl bg-gradient-to-r py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 text-3xl font-bold">ELISA HORTA</div>
            <p className="mb-6 text-gray-100">
              Tu compañero en el camino hacia el bienestar mental. Ofrecemos
              apoyo profesional, recursos educativos y una comunidad de cuidado
              para ayudarte a alcanzar tu mejor versión.
            </p>
            <button className="text-secundario rounded-full bg-white px-6 py-3 font-medium transition-colors hover:bg-gray-100">
              Comenzar Ahora
            </button>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terapia Individual
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Apoyo Grupal
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Recursos Digitales
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Programas Especializados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-gray-100">
              <li>info@elisahorta.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Lun - Vie: 9:00 - 18:00</li>
              <li>Emergencias: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-opacity-20 mt-12 border-t border-white pt-8 text-center">
          <div className="mb-4 flex justify-center space-x-6">
            <BlocksRendererCustom content={autor} />
          </div>
          <p className="text-gray-100">
            © 2024 Elisa Horta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
