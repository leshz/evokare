'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  category: string;
  isNew?: boolean;
  isPermanent?: boolean;
  colors: string[];
  benefits: string[];
  howToUse: string;
  ingredients: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isTherapyProduct: boolean;
  duration?: string;
  therapist?: string;
}

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Agregando ${quantity} unidades del producto ${product.name} al carrito`);
    // Aquí iría la lógica para agregar al carrito
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2">
        {product.isNew && (
          <span className="bg-secundario text-white px-3 py-1 rounded-full text-sm font-medium">
            Nuevo
          </span>
        )}
        {product.isPermanent && (
          <span className="bg-terciario text-white px-3 py-1 rounded-full text-sm font-medium">
            Colección Permanente
          </span>
        )}
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          {product.category}
        </span>
      </div>

      {/* Nombre del producto */}
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

      {/* Rating y reseñas */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {renderStars(Math.floor(product.rating))}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating} ({product.reviewCount} reseñas)
        </span>
      </div>

      {/* Precio */}
      <div className="flex items-center space-x-3">
        {product.originalPrice && (
          <span className="text-2xl text-red-500 line-through">
            ${product.originalPrice}
          </span>
        )}
        <span className="text-4xl font-bold text-gray-900">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Información adicional para terapias */}
      {product.isTherapyProduct && (
        <div className="bg-gradient-to-r from-secundario to-terciario p-4 rounded-lg text-white">
          <h3 className="font-semibold mb-2">Información de la Sesión</h3>
          <div className="space-y-1 text-sm">
            <p><strong>Duración:</strong> {product.duration}</p>
            <p><strong>Terapeuta:</strong> {product.therapist}</p>
          </div>
        </div>
      )}

      {/* Colores disponibles */}
      {product.colors.length > 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Colores disponibles</h3>
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === index
                    ? 'border-secundario ring-2 ring-secundario ring-opacity-50'
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Cantidad y botón de agregar */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(false)}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(true)}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-secundario text-white py-3 rounded-full hover:bg-terciario transition-colors font-medium"
        >
          {product.isTherapyProduct ? 'Reservar Sesión' : 'Agregar al Carrito'}
        </button>
      </div>

      {/* Disponibilidad */}
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'Disponible' : 'Agotado'}
        </span>
      </div>

      {/* Tabs de información */}
      <div className="border-t pt-6">
        <div className="flex space-x-6 mb-4">
          <button
            onClick={() => setActiveTab('description')}
            className={`text-sm font-medium pb-2 border-b-2 transition-colors ${activeTab === 'description'
                ? 'border-secundario text-secundario'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Descripción
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`text-sm font-medium pb-2 border-b-2 transition-colors ${activeTab === 'benefits'
                ? 'border-secundario text-secundario'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Beneficios
          </button>
          <button
            onClick={() => setActiveTab('usage')}
            className={`text-sm font-medium pb-2 border-b-2 transition-colors ${activeTab === 'usage'
                ? 'border-secundario text-secundario'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Uso
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`text-sm font-medium pb-2 border-b-2 transition-colors ${activeTab === 'ingredients'
                ? 'border-secundario text-secundario'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Ingredientes
          </button>
        </div>

        {/* Contenido de tabs */}
        <div className="min-h-[120px]">
          {activeTab === 'description' && (
            <div className="text-gray-700 leading-relaxed">
              {product.fullDescription}
            </div>
          )}

          {activeTab === 'benefits' && (
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'usage' && (
            <div className="text-gray-700 leading-relaxed">
              {product.howToUse}
            </div>
          )}

          {activeTab === 'ingredients' && (
            <ul className="space-y-1">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">
                  • {ingredient}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 