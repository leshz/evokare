'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { submitCita } from '@/services/citas';
import type { CitaPayload, Modalidad, Dia } from '@/services/citas/types';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es requerido'),
  correo: Yup.string()
    .email('Correo inválido')
    .required('El correo es requerido'),
  telefono: Yup.string()
    .matches(/^[0-9+\-\s()]{7,15}$/, 'Teléfono inválido')
    .required('El teléfono es requerido'),
  modalidad: Yup.string()
    .oneOf(['virtual', 'presencial'])
    .required('Selecciona una modalidad'),
  dia: Yup.string()
    .oneOf(['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'])
    .required('Selecciona un día'),
});

const inputBase =
  'w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:border-secundario focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

interface PillOptionProps {
  value: string;
  label: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}

function PillOption({ value, label, selected, disabled, onClick }: PillOptionProps) {
  return (
    <button
      key={value}
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={onClick}
      className={[
        'w-full px-4 py-3 rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base',
        selected
          ? 'bg-secundario text-white'
          : 'border border-secundario text-secundario hover:bg-surface-soft',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

const modalidadOpciones: { value: Modalidad; label: string }[] = [
  { value: 'virtual', label: 'Virtual' },
  { value: 'presencial', label: 'Presencial' },
];

const diaOpciones: { value: Dia; label: string }[] = [
  { value: 'lunes', label: 'Lunes' },
  { value: 'martes', label: 'Martes' },
  { value: 'miercoles', label: 'Miércoles' },
  { value: 'jueves', label: 'Jueves' },
  { value: 'viernes', label: 'Viernes' },
  { value: 'sabado', label: 'Sábado' },
];

export function AgendarForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status === 'success') {
      const t = setTimeout(() => {
        router.push('/agendar');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [status, router]);

  const formik = useFormik<CitaPayload>({
    initialValues: {
      nombre: '',
      correo: '',
      telefono: '',
      modalidad: '' as Modalidad,
      dia: '' as Dia,
    },
    validationSchema,
    onSubmit: async (values) => {
      setStatus('submitting');
      try {
        await submitCita(values);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    },
  });

  const isSubmitting = status === 'submitting';
  const handleRetry = () => setStatus('idle');

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center animate-fade-in">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-secondary text-2xl text-text-primary mb-2">
          ¡Solicitud enviada!
        </h3>
        <p className="text-gray-600">
          Te contactaremos pronto para confirmar tu cita.
        </p>
      </div>
    );
  }

  return (
    <div>
      {status === 'error' && (
        <div className="rounded-2xl bg-red-50 border border-red-200 p-6 text-center animate-fade-in mb-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-3">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-medium text-text-primary mb-1">
            No pudimos enviar tu solicitud
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Hubo un error. Revisa tu conexión e intenta de nuevo.
          </p>
          <Button variant="outline" onClick={handleRetry}>
            Intentar de nuevo
          </Button>
        </div>
      )}

      <form
        onSubmit={formik.handleSubmit}
        noValidate
        className="space-y-6 rounded-2xl bg-white p-4 sm:p-8 shadow-md"
      >
        {/* Nombre */}
        <div>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre completo *"
            disabled={isSubmitting}
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${inputBase} ${formik.touched.nombre && formik.errors.nombre ? 'border-red-400' : 'border-gray-200'}`}
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.nombre}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Correo electrónico *"
            disabled={isSubmitting}
            value={formik.values.correo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${inputBase} ${formik.touched.correo && formik.errors.correo ? 'border-red-400' : 'border-gray-200'}`}
          />
          {formik.touched.correo && formik.errors.correo && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.correo}</p>
          )}
        </div>

        {/* Telefono */}
        <div>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Número de teléfono *"
            disabled={isSubmitting}
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${inputBase} ${formik.touched.telefono && formik.errors.telefono ? 'border-red-400' : 'border-gray-200'}`}
          />
          {formik.touched.telefono && formik.errors.telefono && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.telefono}</p>
          )}
        </div>

        {/* Modalidad */}
        <div>
          <p className="text-sm font-medium text-text-primary mb-3">Modalidad *</p>
          <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Modalidad">
            {modalidadOpciones.map((o) => (
              <PillOption
                key={o.value}
                value={o.value}
                label={o.label}
                selected={formik.values.modalidad === o.value}
                disabled={isSubmitting}
                onClick={() => {
                  formik.setFieldValue('modalidad', o.value, true);
                }}
              />
            ))}
          </div>
          {formik.touched.modalidad && formik.errors.modalidad && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.modalidad}</p>
          )}
        </div>

        {/* Dia */}
        <div>
          <p className="text-sm font-medium text-text-primary mb-3">Día preferido *</p>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            role="radiogroup"
            aria-label="Día"
          >
            {diaOpciones.map((d) => (
              <PillOption
                key={d.value}
                value={d.value}
                label={d.label}
                selected={formik.values.dia === d.value}
                disabled={isSubmitting}
                onClick={() => {
                  formik.setFieldValue('dia', d.value, true);
                }}
              />
            ))}
          </div>
          {formik.touched.dia && formik.errors.dia && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.dia}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar cita'}
        </Button>
      </form>
    </div>
  );
}
