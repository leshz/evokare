import Image from 'next/image';
import Link from 'next/link';

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
}

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

// Mock data de productos relacionados
const allProducts: RelatedProduct[] = [
  {
    id: 1,
    name: "Aceite de Lavanda Premium",
    price: 49,
    originalPrice: 65,
    image: "https://picsum.photos/300/300?random=1",
    category: "Aceites Esenciales",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Cristales de Cuarzo Rosa",
    price: 35,
    image: "https://picsum.photos/300/300?random=5",
    category: "Cristales",
    rating: 4.9
  },
  {
    id: 4,
    name: "Infusión Herbal Relajante",
    price: 28,
    originalPrice: 35,
    image: "https://picsum.photos/300/300?random=11",
    category: "Hierbas",
    rating: 4.6
  },
  {
    id: 5,
    name: "Velas de Aromaterapia",
    price: 42,
    image: "https://picsum.photos/300/300?random=12",
    category: "Aromaterapia",
    rating: 4.7,
    isNew: true
  },
  {
    id: 6,
    name: "Cuencos Tibetanos",
    price: 125,
    image: "https://picsum.photos/300/300?random=13",
    category: "Terapia Sonora",
    rating: 5.0
  },
  {
    id: 7,
    name: "Aceite de Eucalipto",
    price: 38,
    originalPrice: 48,
    image: "https://picsum.photos/300/300?random=14",
    category: "Aceites Esenciales",
    rating: 4.5
  },
  {
    id: 8,
    name: "Piedras Volcánicas",
    price: 65,
    image: "https://picsum.photos/300/300?random=15",
    category: "Masajes",
    rating: 4.8
  },
  {
    id: 9,
    name: "Difusor Ultrasónico",
    price: 75,
    image: "https://picsum.photos/300/300?random=16",
    category: "Aromaterapia",
    rating: 4.9
  }
];

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Filtrar productos relacionados excluyendo el producto actual
  const relatedProducts = allProducts
    .filter(product => product.id !== currentProductId)
    .filter(product => product.category === category || Math.random() > 0.3) // Incluir productos de la misma categoría y algunos aleatorios
    .slice(0, 4); // Mostrar máximo 4 productos

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Productos Relacionados</h2>
        <Link
          href="/productos"
          className="text-secundario hover:text-terciario transition-colors text-sm font-medium"
        >
          Ver todos →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/productos/${product.id}`}
            className="group block"
          >
            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              {/* Imagen del producto */}
              <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Etiqueta nuevo */}
              {product.isNew && (
                <div className="mb-2">
                  <span className="bg-secundario text-white px-2 py-1 rounded-full text-xs font-medium">
                    Nuevo
                  </span>
                </div>
              )}

              {/* Nombre del producto */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secundario transition-colors line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-2">
                <div className="flex">
                  {renderStars(Math.floor(product.rating))}
                </div>
                <span className="text-sm text-gray-600">({product.rating})</span>
              </div>

              {/* Precio */}
              <div className="flex items-center space-x-2">
                {product.originalPrice && (
                  <span className="text-red-500 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>

              {/* Categoría */}
              <div className="mt-2">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {product.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Sección de recomendaciones personalizadas */}
      <div className="mt-8 p-4 bg-gradient-to-r from-secundario to-terciario rounded-lg text-white">
        <h3 className="font-semibold mb-2">💡 Recomendación Personalizada</h3>
        <p className="text-sm text-principal">
          Basándome en tu interés en productos de {category.toLowerCase()}, estos productos podrían complementar perfectamente tu experiencia de bienestar.
        </p>
      </div>
    </div>
  );
} 