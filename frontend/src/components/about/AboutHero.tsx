interface AboutHeroProps {
  data?: {
    titulo?: string;
    subtitulo?: string;
  };
}

export const AboutHero = ({ data }: AboutHeroProps) => {
  const titulo = data?.titulo || 'Conoce Nuestro Enfoque Integral';

  return (
    <div className="from-secundario to-terciario bg-linear-to-r px-5 pt-16 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <nav className="mb-4 text-sm text-white/80">
            <span>Inicio</span> /{' '}
            <span className="font-medium text-white">Nosotros</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {titulo}
          </h1>
          {data?.subtitulo && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              {data.subtitulo}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
