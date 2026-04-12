import {
  AlertCircle,
  CloudRain,
  BrainCircuit,
  Heart,
  Zap,
  Shield,
  LucideIcon,
} from 'lucide-react';
import { UnderstandingComponent, IconName } from '@/services/inicio/types';
import { SectionHeader } from '@/components/shared/SectionHeader';

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
const iconColors: [string, string, string][] = [
  ['bg-indigo-100', 'group-hover:bg-indigo-200', 'text-indigo-600'],
  ['bg-purple-100', 'group-hover:bg-purple-200', 'text-purple-600'],
  ['bg-indigo-50', 'group-hover:bg-indigo-100', 'text-indigo-500'],
];

const iconMap: Record<IconName, IconConfig> = {
  AlertCircle: {
    Icon: AlertCircle,
    bgColor: iconColors[0][0],
    hoverBgColor: iconColors[0][1],
    iconColor: iconColors[0][2],
  },
  CloudRain: {
    Icon: CloudRain,
    bgColor: iconColors[1][0],
    hoverBgColor: iconColors[1][1],
    iconColor: iconColors[1][2],
  },
  BrainCircuit: {
    Icon: BrainCircuit,
    bgColor: iconColors[2][0],
    hoverBgColor: iconColors[2][1],
    iconColor: iconColors[2][2],
  },
  Heart: {
    Icon: Heart,
    bgColor: iconColors[0][0],
    hoverBgColor: iconColors[0][1],
    iconColor: iconColors[0][2],
  },
  Zap: {
    Icon: Zap,
    bgColor: iconColors[1][0],
    hoverBgColor: iconColors[1][1],
    iconColor: iconColors[1][2],
  },
  Shield: {
    Icon: Shield,
    bgColor: iconColors[2][0],
    hoverBgColor: iconColors[2][1],
    iconColor: iconColors[2][2],
  },
};

export function UnderstandingSection({ data }: UnderstandingSectionProps) {
  if (!data) {
    console.error('UnderstandingSection: data is undefined');
    return null;
  }

  const { titulo, subtitulo, punto = [] } = data;

  if (!titulo || !subtitulo || punto.length === 0) {
    console.warn(
      'UnderstandingSection: Missing required data (titulo, subtitulo, or punto)'
    );
    return null;
  }

  return (
    <section className="bg-surface-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader title={titulo} subtitle={subtitulo} />
        <div className="grid gap-8 md:grid-cols-3">
          {punto.map(
            ({ id, titulo: itemTitulo, subtitulo: itemSubtitulo, icono }) => {
              // Obtener la configuración del icono desde el CMS
              const iconConfig = iconMap[icono];

              // Fallback en caso de que el icono no exista en el mapa
              if (!iconConfig) {
                console.warn(
                  `Icon "${icono}" not found in iconMap. Using default.`
                );
                return null;
              }

              const { Icon, bgColor, hoverBgColor, iconColor } = iconConfig;

              return (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${bgColor} transition-colors ${hoverBgColor}`}
                  >
                    <Icon className={iconColor} size={32} />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {itemTitulo}
                  </h3>
                  <p className="text-gray-600">{itemSubtitulo}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
