import * as Yup from 'yup';

export const citaSchema = Yup.object({
  nombre: Yup.string().trim().min(1).max(120).required(),
  correo: Yup.string().trim().email().max(254).required(),
  telefono: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]{7,15}$/)
    .required(),
  modalidad: Yup.string().oneOf(['virtual', 'presencial']).required(),
  dia: Yup.string()
    .oneOf(['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'])
    .required(),
}).noUnknown();
