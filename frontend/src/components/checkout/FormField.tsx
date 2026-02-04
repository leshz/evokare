'use client';

import { Field, ErrorMessage, useField, useFormikContext } from 'formik';
import type { InputHTMLAttributes, ChangeEvent } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  mask?: 'phone' | 'numeric';
}

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }
  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function applyNumericMask(value: string, maxDigits: number = 12): string {
  const digits = value.replace(/\D/g, '').slice(0, maxDigits);
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function FormField({
  label,
  name,
  required,
  mask,
  ...props
}: FormFieldProps) {
  const [, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const hasError = meta.touched && meta.error;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (mask === 'phone') {
      const maskedValue = applyPhoneMask(e.target.value);
      setFieldValue(name, maskedValue);
    } else if (mask === 'numeric') {
      const maskedValue = applyNumericMask(e.target.value);
      setFieldValue(name, maskedValue);
    }
  };

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
        {...(mask && { onChange: handleChange })}
        {...props}
      />
      <ErrorMessage name={name}>
        {msg => <p className="mt-1 text-sm text-red-500">{msg}</p>}
      </ErrorMessage>
    </div>
  );
}
