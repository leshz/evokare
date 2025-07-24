import { Send } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const ContactForm = () => {
  return (
    <form className="bg-white rounded-2xl shadow-md p-8 space-y-6 w-full max-w-lg mx-auto">
      <div className="text-gray-900 font-semibold mb-2">Contactanos</div>
      <div className="flex gap-4 mb-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="flex-1 bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Número de teléfono"
          className="flex-1 bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Asunto"
          className="w-full bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Mensaje"
          className="w-full bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none min-h-[120px]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-br from-secundario to-terciario text-white py-4 rounded-full flex items-center justify-center gap-2 text-lg font-medium hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all"
      >
        Enviar Mensaje
        <span className="inline-block bg-white bg-opacity-30 rounded-full p-2 ml-2">
          <Send className="w-4 h-4 text-secundario" />
        </span>
      </button>
      <SocialLinks />
    </form>
  );
}; 