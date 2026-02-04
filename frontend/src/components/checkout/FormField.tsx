'use client';

import { Field, ErrorMessage, useField } from 'formik';
import type { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function FormField({ label, name, required, ...props }: FormFieldProps) {
  const [, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Field
        id={name}
        name={name}
        className={`focus:border-secundario w-full rounded-lg border bg-white px-4 py-3 text-gray-900 focus:outline-none ${
          hasError ? 'border-red-500' : 'border-gray-200'
        }`}
        {...props}
      />
      <ErrorMessage name={name}>
        {msg => <p className="mt-1 text-sm text-red-500">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}
