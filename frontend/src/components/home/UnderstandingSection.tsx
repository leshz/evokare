import { AlertCircle, CloudRain, BrainCircuit, Heart, Zap, Shield, LucideIcon } from 'lucide-react';
import { UnderstandingComponent, IconName } from '@/services/inicio/types';

interface UnderstandingSectionProps {
  data: UnderstandingComponent;
}

interface IconConfig {
  Icon: LucideIcon;
  bgColor: string;
  hoverBgColor: string;
  iconColor: string;
}

// Mapeo de nombres de iconos a componentes de Lucide con sus colores
const iconMap: Record<IconName, IconConfig> = {
  AlertCircle: {
    Icon: AlertCircle,
    bgColor: 'bg-red-100',
    hoverBgColor: 'group-hover:bg-red-200',
    iconColor: 'text-red-500'
  },
  CloudRain: {
    Icon: CloudRain,
    bgColor: 'bg-blue-100',
    hoverBgColor: 'group-hover:bg-blue-200',
    iconColor: 'text-blue-500'
  },
  BrainCircuit: {
    Icon: BrainCircuit,
    bgColor: 'bg-purple-100',
    hoverBgColor: 'group-hover:bg-purple-200',
    iconColor: 'text-purple-500'
  },
  Heart: {
    Icon: Heart,
    bgColor: 'bg-pink-100',
    hoverBgColor: 'group-hover:bg-pink-200',
    iconColor: 'text-pink-500'
  },
  Zap: {
    Icon: Zap,
    bgColor: 'bg-yellow-100',
    hoverBgColor: 'group-hover:bg-yellow-200',
    iconColor: 'text-yellow-500'
  },
  Shield: {
    Icon: Shield,
    bgColor: 'bg-green-100',
    hoverBgColor: 'group-hover:bg-green-200',
    iconColor: 'text-green-500'
  },
};

export function UnderstandingSection({ data }: UnderstandingSectionProps) {
  if (!data) {
    console.error('UnderstandingSection: data is undefined');
    return null;
  }

  const { titulo, subtitulo, punto = [] } = data;

  if (!titulo || !subtitulo || punto.length === 0) {
    console.warn('UnderstandingSection: Missing required data (titulo, subtitulo, or punto)');
    return null;
  }

  return (
    <section className="bg-linear-to-br from-indigo-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-gray-900">{titulo}</h2>
          <p className="text-xl font-medium text-gray-600">{subtitulo}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {punto.map(({ id, titulo: itemTitulo, subtitulo: itemSubtitulo, icono }) => {
            // Obtener la configuración del icono desde el CMS
            const iconConfig = iconMap[icono];

            // Fallback en caso de que el icono no exista en el mapa
            if (!iconConfig) {
              console.warn(`Icon "${icono}" not found in iconMap. Using default.`);
              return null;
            }

            const { Icon, bgColor, hoverBgColor, iconColor } = iconConfig;

            return (
              <div key={id} className="flex flex-col items-center justify-center text-center">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${bgColor} transition-colors ${hoverBgColor}`}
                >
                  <Icon className={iconColor} size={32} />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{itemTitulo}</h3>
                <p className="text-gray-600">{itemSubtitulo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
