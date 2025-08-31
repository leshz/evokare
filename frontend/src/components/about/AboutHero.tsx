import Image from 'next/image';

export const AboutHero = () => {
  return (
    <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex-1">
        <div
          className="text-secundario absolute -z-10 text-6xl font-extrabold opacity-10 select-none"
          style={{ top: 0 }}
        >
          About Us
        </div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">
          Conoce Nuestro Enfoque Integral
        </h1>
        <nav className="mb-4 text-sm text-gray-500">
          <span>Home</span> / <span>Pages</span> /{' '}
          <span className="text-secundario font-medium">Nosotros</span>
        </nav>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
          width={400}
          height={80}
          alt="Terapia profesional"
          className="h-40 w-full rounded-2xl object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
          width={400}
          height={80}
          alt="Sesión terapéutica"
          className="h-20 w-1/2 self-end rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};
