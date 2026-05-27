export type Modalidad = 'virtual' | 'presencial';
export type Dia =
  | 'lunes'
  | 'martes'
  | 'miercoles'
  | 'jueves'
  | 'viernes'
  | 'sabado';

export interface CitaPayload {
  nombre: string;
  correo: string;
  telefono: string;
  modalidad: Modalidad;
  dia: Dia;
}

export interface CitaResponse {
  id: number;
  documentId: string;
  nombre: string;
  correo: string;
  telefono: string;
  modalidad: Modalidad;
  dia: Dia;
  createdAt: string;
  updatedAt: string;
}
