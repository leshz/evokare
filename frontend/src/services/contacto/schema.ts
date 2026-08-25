import * as Yup from 'yup';

export const contactFormSchema = Yup.object({
  nombre: Yup.string().trim().max(120).optional(),
  email: Yup.string().trim().email().max(254).required(),
  telefono: Yup.string().trim().max(30).optional(),
  asunto: Yup.string().trim().min(1).max(200).required(),
  mensaje: Yup.string().trim().min(1).max(5000).required(),
}).noUnknown();
