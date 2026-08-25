'use client';

import { useState, useTransition } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { submitContactForm } from '@/services/contacto/actions';
import { trackGenerateLead } from '@/lib/analytics';

interface FormErrors {
  email?: string;
  asunto?: string;
  mensaje?: string;
}

const inputBase =
  'w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:border-secundario focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

export const ContactForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: FormErrors = {};

    if (!formData.get('email')) newErrors.email = 'El correo es requerido';
    if (!formData.get('asunto')) newErrors.asunto = 'El asunto es requerido';
    if (!formData.get('mensaje')) newErrors.mensaje = 'El mensaje es requerido';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setServerError(false);
    startTransition(async () => {
      try {
        await submitContactForm({
          nombre: formData.get('nombre') as string | undefined,
          email: formData.get('email') as string,
          telefono: formData.get('telefono') as string | undefined,
          asunto: formData.get('asunto') as string,
          mensaje: formData.get('mensaje') as string,
        });
        trackGenerateLead();
        setSubmitted(true);
      } catch {
        setServerError(true);
      }
    });
  };

  const handleRetry = () => setServerError(false);

  if (submitted) {
    return (
      <div className="animate-fade-in rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-secondary text-text-primary mb-2 text-2xl">
          Mensaje enviado
        </h3>
        <p className="text-gray-600">
          Gracias por contactarnos. Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <div>
      {serverError && (
        <div className="animate-fade-in mb-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
            <AlertCircle className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-text-primary mb-1 font-medium">
            No pudimos enviar tu mensaje
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Hubo un error. Revisa tu conexión e intenta de nuevo.
          </p>
          <Button variant="outline" onClick={handleRetry}>
            Intentar de nuevo
          </Button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl bg-white p-4 shadow-md sm:p-8"
        noValidate
      >
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            disabled={isPending}
            className={`${inputBase} border-gray-200`}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico *"
            disabled={isPending}
            className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            disabled={isPending}
            className={`${inputBase} border-gray-200`}
          />
        </div>

        <div>
          <input
            type="text"
            name="asunto"
            placeholder="Asunto *"
            disabled={isPending}
            className={`${inputBase} ${errors.asunto ? 'border-red-400' : 'border-gray-200'}`}
            required
          />
          {errors.asunto && (
            <p className="mt-1 text-sm text-red-500">{errors.asunto}</p>
          )}
        </div>

        <div>
          <textarea
            name="mensaje"
            placeholder="Mensaje *"
            disabled={isPending}
            className={`${inputBase} min-h-[120px] ${errors.mensaje ? 'border-red-400' : 'border-gray-200'}`}
            required
          />
          {errors.mensaje && (
            <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full gap-2"
          disabled={isPending}
        >
          {isPending ? 'Enviando...' : 'Enviar Mensaje'}
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
