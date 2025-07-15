import Image from "next/image";

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
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group">
      {/* Imagen del producto */}
      <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={producto.image}
          alt={producto.name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Etiqueta de categoria o estado */}
      <div className="mb-3">
        {producto.isNew && (
          <span className="bg-secundario text-white px-3 py-1 rounded-full text-sm font-medium">
            Nuevo
          </span>
        )}
        {producto.isPermanent && (
          <span className="bg-terciario text-white px-3 py-1 rounded-full text-sm font-medium">
            Colección Permanente
          </span>
        )}
      </div>

      {/* Nombre del producto */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secundario transition-colors">
        {producto.name}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {producto.description}
      </p>

      {/* Colores disponibles */}
      <div className="flex items-center gap-2 mb-4">
        {producto.colors.map((color, index) => (
          <div
            key={index}
            className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Precio */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {producto.originalPrice && (
            <span className="text-red-500 line-through text-lg">
              ${producto.originalPrice}
            </span>
          )}
          <span className="text-2xl font-bold text-gray-900">
            ${producto.price}
          </span>
        </div>
        <button className="bg-secundario text-white px-6 py-2 rounded-full hover:bg-terciario transition-colors font-medium">
          Agregar
        </button>
      </div>
    </div>
  );
} 