'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { Button } from '@/components/shared/Button';

interface FormErrors {
  email?: string;
  asunto?: string;
  mensaje?: string;
}

export const ContactForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: FormErrors = {};

    if (!formData.get('email')) newErrors.email = 'El correo es requerido';
    if (!formData.get('asunto')) newErrors.asunto = 'El asunto es requerido';
    if (!formData.get('mensaje'))
      newErrors.mensaje = 'El mensaje es requerido';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-md">
        <div className="bg-secundario/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Send className="text-secundario h-8 w-8" />
        </div>
        <h3 className="text-text-primary mb-2 text-xl font-semibold">
          Mensaje enviado
        </h3>
        <p className="text-gray-600">
          Gracias por contactarnos. Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg space-y-6 rounded-2xl bg-white p-8 shadow-md"
      noValidate
    >
      <div className="text-text-primary mb-2 text-lg font-semibold">
        Contáctanos
      </div>
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico *"
            className={`w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:border-secundario focus:outline-none ${
              errors.email ? 'border-red-400' : 'border-gray-200'
            }`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <input
          type="tel"
          name="telefono"
          placeholder="Número de teléfono"
          className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-secundario focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="asunto"
          placeholder="Asunto *"
          className={`w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:border-secundario focus:outline-none ${
            errors.asunto ? 'border-red-400' : 'border-gray-200'
          }`}
          required
        />
        {errors.asunto && (
          <p className="mt-1 text-sm text-red-500">{errors.asunto}</p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          name="mensaje"
          placeholder="Mensaje *"
          className={`min-h-[120px] w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:border-secundario focus:outline-none ${
            errors.mensaje ? 'border-red-400' : 'border-gray-200'
          }`}
          required
        />
        {errors.mensaje && (
          <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>
        )}
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
        Enviar Mensaje
        <Send className="h-4 w-4" />
      </Button>
      <SocialLinks />
    </form>
  );
};
