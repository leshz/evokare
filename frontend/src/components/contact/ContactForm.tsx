import { Send } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const ContactForm = () => {
  return (
    <form className="mx-auto w-full max-w-lg space-y-6 rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-2 font-semibold text-gray-900">Contactanos</div>
      <div className="mb-4 flex gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="focus:border-secundario flex-1 rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Número de teléfono"
          className="focus:border-secundario flex-1 rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Asunto"
          className="focus:border-secundario w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Mensaje"
          className="focus:border-secundario min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="from-secundario to-terciario hover:from-terciario hover:to-secundario flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br py-4 text-lg font-medium text-white transition-all hover:bg-gradient-to-br"
      >
        Enviar Mensaje
        <span className="bg-opacity-30 ml-2 inline-block rounded-full bg-white p-2">
          <Send className="text-secundario h-4 w-4" />
        </span>
      </button>
      <SocialLinks />
    </form>
  );
};
