import * as Yup from 'yup';

export const checkoutSchema = Yup.object().shape({
  nombres: Yup.string()
    .required('Los nombres son requeridos')
    .min(2, 'Mínimo 2 caracteres'),
  apellidos: Yup.string()
    .required('Los apellidos son requeridos')
    .min(2, 'Mínimo 2 caracteres'),
  cedula: Yup.string()
    .required('La cédula es requerida')
    .matches(/^[\d.]+$/, 'Solo números')
    .test('min-digits', 'Mínimo 6 dígitos', (value) => {
      if (!value) return false;
      return value.replace(/\./g, '').length >= 6;
    })
    .test('max-digits', 'Máximo 12 dígitos', (value) => {
      if (!value) return false;
      return value.replace(/\./g, '').length <= 12;
    }),
  email: Yup.string().required('El email es requerido').email('Email inválido'),
  telefono: Yup.string()
    .required('El teléfono es requerido')
    .matches(/^3\d{2}-\d{3}-\d{4}$/, 'Formato inválido (3xx-xxx-xxxx)'),
  departamento: Yup.string().required('Selecciona un departamento'),
  ciudad: Yup.string().required('Selecciona una ciudad'),
  direccion: Yup.string()
    .required('La dirección es requerida')
    .min(5, 'Mínimo 5 caracteres'),
  codigoPostal: Yup.string(),
  notas: Yup.string().max(500, 'Máximo 500 caracteres'),
});
