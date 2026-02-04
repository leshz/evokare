'use client';

import { FormField } from './FormField';

export function BillingFields() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Nombres"
          name="nombres"
          required
          placeholder="Tus nombres"
        />
        <FormField
          label="Apellidos"
          name="apellidos"
          required
          placeholder="Tu apellido"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Cédula"
          name="cedula"
          inputMode="numeric"
          required
          placeholder="Cédula de ciudadanía"
          mask="numeric"
          maxLength={14}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="Email"
        />
      </div>
      <FormField
        label="Teléfono celular"
        name="telefono"
        type="tel"
        inputMode="numeric"
        required
        placeholder="3xx-xxx-xxxx"
        mask="phone"
        maxLength={12}
      />
    </div>
  );
}
