import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  producto: {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    isPermanent?: boolean;
    colors: string[];
  };
}

export function ProductCard({ producto }: ProductCardProps) {
  return (
    <Link href={`/productos/${producto.id}`}>
      <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        {/* Imagen del producto */}
        <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={producto.image}
            alt={producto.name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Etiqueta de categoria o estado */}
        <div className="mb-3">
          {producto.isNew && (
            <span className="bg-secundario rounded-full px-3 py-1 text-sm font-medium text-white">
              Nuevo
            </span>
          )}
          {producto.isPermanent && (
            <span className="bg-terciario rounded-full px-3 py-1 text-sm font-medium text-white">
              Colección Permanente
            </span>
          )}
        </div>

        {/* Nombre del producto */}
        <h3 className="group-hover:text-secundario mb-2 text-xl font-semibold text-gray-900 transition-colors">
          {producto.name}
        </h3>

        {/* Descripción */}
        <p className="mb-4 leading-relaxed text-gray-600">
          {producto.description}
        </p>

        {/* Colores disponibles */}
        <div className="mb-4 flex items-center gap-2">
          {producto.colors.map((color, index) => (
            <div
              key={index}
              className="h-6 w-6 rounded-full border-2 border-gray-200 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Precio */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {producto.originalPrice && (
              <span className="text-lg text-red-500 line-through">
                ${producto.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              ${producto.price}
            </span>
          </div>
          <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-6 py-2 font-medium text-white transition-all hover:bg-gradient-to-br">
            Agregar
          </button>
        </div>
      </div>
    </Link>
  );
}
