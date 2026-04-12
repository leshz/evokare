interface BlogHeroProps {
  title?: string;
  subtitle?: string;
}

export const BlogHero = ({
  title = 'Noticias y Artículos',
  subtitle = 'Tu fuente confiable sobre salud mental',
}: BlogHeroProps) => {
  return (
    <div className="from-secundario to-terciario bg-linear-to-r px-5 pt-16 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <nav className="mb-4 text-sm text-white/80">
            <span>Inicio</span> /{' '}
            <span className="font-medium text-white">Blog</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
