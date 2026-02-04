'use client';

import { useMemo } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { FormField } from './FormField';
import {
  DEPARTMENTS,
  getCitiesByDepartment,
} from '@/constants/colombia-locations';
import type { CheckoutFormValues } from '@/services/checkout/types';

export function ShippingFields() {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<CheckoutFormValues>();

  const cities = useMemo(
    () => (values.departamento ? getCitiesByDepartment(values.departamento) : []),
    [values.departamento]
  );

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDepartment = e.target.value;
    setFieldValue('departamento', newDepartment);
    setFieldValue('ciudad', '');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          País / Región
        </label>
        <input
          type="text"
          value="Colombia"
          disabled
          className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="departamento"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Departamento <span className="text-red-500">*</span>
          </label>
          <Field
            as="select"
            id="departamento"
            name="departamento"
            onChange={handleDepartmentChange}
            className={`w-full rounded-lg border bg-white px-4 py-3 focus:border-secundario focus:outline-none ${
              touched.departamento && errors.departamento
                ? 'border-red-500'
                : 'border-gray-200'
            }`}
          >
            <option value="">Elige una opción</option>
            {DEPARTMENTS.map((d) => (
              <option key={d.code} value={d.code}>
                {d.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="departamento">
            {(msg) => <p className="mt-1 text-sm text-red-500">{msg}</p>}
          </ErrorMessage>
        </div>

        <div>
          <label
            htmlFor="ciudad"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Ciudad <span className="text-red-500">*</span>
          </label>
          <Field
            as="select"
            id="ciudad"
            name="ciudad"
            disabled={!values.departamento}
            className={`w-full rounded-lg border bg-white px-4 py-3 focus:border-secundario focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 ${
              touched.ciudad && errors.ciudad
                ? 'border-red-500'
                : 'border-gray-200'
            }`}
          >
            <option value="">Elige una opción</option>
            {cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="ciudad">
            {(msg) => <p className="mt-1 text-sm text-red-500">{msg}</p>}
          </ErrorMessage>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Dirección"
          name="direccion"
          required
          placeholder="Dirección de la calle, ap"
        />
        <FormField
          label="Código postal"
          name="codigoPostal"
          placeholder="Código postal"
        />
      </div>

      <div>
        <label
          htmlFor="notas"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Notas sobre el pedido
        </label>
        <Field
          as="textarea"
          id="notas"
          name="notas"
          rows={3}
          placeholder="Notas Sobre El Pedido, Por Ejemplo, Notas Especiales Para La Entrega."
          className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 focus:border-secundario focus:outline-none"
        />
      </div>
    </div>
  );
}
