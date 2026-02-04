export interface Department {
  code: string;
  name: string;
}

export interface City {
  name: string;
  departmentCode: string;
}

export const DEPARTMENTS: Department[] = [
  { code: 'DC', name: 'Bogotá D.C.' },
  { code: 'ANT', name: 'Antioquia' },
  { code: 'VAC', name: 'Valle del Cauca' },
  { code: 'ATL', name: 'Atlántico' },
  { code: 'SAN', name: 'Santander' },
  { code: 'CUN', name: 'Cundinamarca' },
  { code: 'BOL', name: 'Bolívar' },
  { code: 'NAR', name: 'Nariño' },
  { code: 'COR', name: 'Córdoba' },
  { code: 'TOL', name: 'Tolima' },
  { code: 'CAU', name: 'Cauca' },
  { code: 'NSA', name: 'Norte de Santander' },
  { code: 'BOY', name: 'Boyacá' },
  { code: 'MAG', name: 'Magdalena' },
  { code: 'HUI', name: 'Huila' },
  { code: 'CES', name: 'Cesar' },
  { code: 'RIS', name: 'Risaralda' },
  { code: 'CAL', name: 'Caldas' },
  { code: 'MET', name: 'Meta' },
  { code: 'SUC', name: 'Sucre' },
  { code: 'QUI', name: 'Quindío' },
  { code: 'LAG', name: 'La Guajira' },
  { code: 'CHO', name: 'Chocó' },
  { code: 'CAS', name: 'Casanare' },
  { code: 'CAQ', name: 'Caquetá' },
  { code: 'PUT', name: 'Putumayo' },
  { code: 'ARA', name: 'Arauca' },
  { code: 'SAP', name: 'San Andrés y Providencia' },
  { code: 'AMA', name: 'Amazonas' },
  { code: 'GUV', name: 'Guaviare' },
  { code: 'VID', name: 'Vichada' },
  { code: 'GUA', name: 'Guainía' },
  { code: 'VAU', name: 'Vaupés' },
];

export const CITIES: City[] = [
  // Bogotá D.C.
  { name: 'Bogotá', departmentCode: 'DC' },
  // Antioquia
  { name: 'Medellín', departmentCode: 'ANT' },
  { name: 'Bello', departmentCode: 'ANT' },
  { name: 'Itagüí', departmentCode: 'ANT' },
  { name: 'Envigado', departmentCode: 'ANT' },
  { name: 'Rionegro', departmentCode: 'ANT' },
  // Valle del Cauca
  { name: 'Cali', departmentCode: 'VAC' },
  { name: 'Buenaventura', departmentCode: 'VAC' },
  { name: 'Palmira', departmentCode: 'VAC' },
  { name: 'Tuluá', departmentCode: 'VAC' },
  // Atlántico
  { name: 'Barranquilla', departmentCode: 'ATL' },
  { name: 'Soledad', departmentCode: 'ATL' },
  // Santander
  { name: 'Bucaramanga', departmentCode: 'SAN' },
  { name: 'Floridablanca', departmentCode: 'SAN' },
  { name: 'Girón', departmentCode: 'SAN' },
  { name: 'Barrancabermeja', departmentCode: 'SAN' },
  // Cundinamarca
  { name: 'Soacha', departmentCode: 'CUN' },
  { name: 'Facatativá', departmentCode: 'CUN' },
  { name: 'Zipaquirá', departmentCode: 'CUN' },
  { name: 'Chía', departmentCode: 'CUN' },
  { name: 'Girardot', departmentCode: 'CUN' },
  // Bolívar
  { name: 'Cartagena', departmentCode: 'BOL' },
  { name: 'Magangué', departmentCode: 'BOL' },
  // Nariño
  { name: 'Pasto', departmentCode: 'NAR' },
  { name: 'Tumaco', departmentCode: 'NAR' },
  { name: 'Ipiales', departmentCode: 'NAR' },
  // Córdoba
  { name: 'Montería', departmentCode: 'COR' },
  { name: 'Lorica', departmentCode: 'COR' },
  // Tolima
  { name: 'Ibagué', departmentCode: 'TOL' },
  { name: 'Espinal', departmentCode: 'TOL' },
  // Cauca
  { name: 'Popayán', departmentCode: 'CAU' },
  // Norte de Santander
  { name: 'Cúcuta', departmentCode: 'NSA' },
  { name: 'Ocaña', departmentCode: 'NSA' },
  // Boyacá
  { name: 'Tunja', departmentCode: 'BOY' },
  { name: 'Duitama', departmentCode: 'BOY' },
  { name: 'Sogamoso', departmentCode: 'BOY' },
  // Magdalena
  { name: 'Santa Marta', departmentCode: 'MAG' },
  { name: 'Ciénaga', departmentCode: 'MAG' },
  // Huila
  { name: 'Neiva', departmentCode: 'HUI' },
  { name: 'Pitalito', departmentCode: 'HUI' },
  // Cesar
  { name: 'Valledupar', departmentCode: 'CES' },
  // Risaralda
  { name: 'Pereira', departmentCode: 'RIS' },
  { name: 'Dosquebradas', departmentCode: 'RIS' },
  // Caldas
  { name: 'Manizales', departmentCode: 'CAL' },
  { name: 'La Dorada', departmentCode: 'CAL' },
  // Meta
  { name: 'Villavicencio', departmentCode: 'MET' },
  { name: 'Acacías', departmentCode: 'MET' },
  // Sucre
  { name: 'Sincelejo', departmentCode: 'SUC' },
  // Quindío
  { name: 'Armenia', departmentCode: 'QUI' },
  // La Guajira
  { name: 'Riohacha', departmentCode: 'LAG' },
  { name: 'Maicao', departmentCode: 'LAG' },
  // Chocó
  { name: 'Quibdó', departmentCode: 'CHO' },
  // Casanare
  { name: 'Yopal', departmentCode: 'CAS' },
  // Caquetá
  { name: 'Florencia', departmentCode: 'CAQ' },
  // Putumayo
  { name: 'Mocoa', departmentCode: 'PUT' },
  // Arauca
  { name: 'Arauca', departmentCode: 'ARA' },
  // San Andrés
  { name: 'San Andrés', departmentCode: 'SAP' },
  // Amazonas
  { name: 'Leticia', departmentCode: 'AMA' },
  // Guaviare
  { name: 'San José del Guaviare', departmentCode: 'GUV' },
  // Vichada
  { name: 'Puerto Carreño', departmentCode: 'VID' },
  // Guainía
  { name: 'Inírida', departmentCode: 'GUA' },
  // Vaupés
  { name: 'Mitú', departmentCode: 'VAU' },
];

export const getCitiesByDepartment = (departmentCode: string): City[] =>
  CITIES.filter((city) => city.departmentCode === departmentCode);
