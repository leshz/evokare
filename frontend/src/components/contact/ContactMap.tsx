import { MapPin } from 'lucide-react';

export const ContactMap = () => {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-surface-soft">
      <MapPin className="text-secundario/40 mb-2 h-8 w-8" />
      <span className="text-sm text-gray-400">Mapa disponible próximamente</span>
    </div>
  );
};
