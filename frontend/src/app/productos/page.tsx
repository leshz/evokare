'use client';

import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductHero } from "@/components/products/ProductHero";
import { ShoppingCart } from "@/components/products/ShoppingCart";

const productos = [
  {
    id: 1,
    name: "Aceite de Lavanda Premium",
    description: "Aceite esencial puro de lavanda francesa para relajación y bienestar mental",
    price: 49,
    originalPrice: 65,
    image: "https://picsum.photos/300/300",
    category: "Aceites Esenciales",
    isNew: true,
    colors: ["#9f97f0", "#5893f7"]
  },
  {
    id: 2,
    name: "Cristales de Cuarzo Rosa",
    description: "Cristales naturales de cuarzo rosa para equilibrio emocional y amor propio",
    price: 35,
    image: "https://picsum.photos/300/300",
    category: "Cristales",
    isPermanent: true,
    colors: ["#ff9999", "#ffb3b3"]
  },
  {
    id: 3,
    name: "Kit de Meditación Completo",
    description: "Set completo con cojín, incienso y guía de meditación para principiantes",
    price: 89,
    image: "https://picsum.photos/300/300",
    category: "Meditación",
    isPermanent: true,
    colors: ["#9f97f0", "#ffffff"]
  },
  {
    id: 4,
    name: "Infusión Herbal Relajante",
    description: "Mezcla natural de hierbas para promover la calma y el sueño reparador",
    price: 28,
    originalPrice: 35,
    image: "https://picsum.photos/300/300",
    category: "Hierbas",
    colors: ["#90EE90", "#98FB98"]
  },
  {
    id: 5,
    name: "Velas de Aromaterapia",
    description: "Velas artesanales con aceites esenciales para crear ambientes de paz",
    price: 42,
    image: "https://picsum.photos/300/300",
    category: "Aromaterapia",
    isNew: true,
    colors: ["#9f97f0", "#5893f7"]
  },
  {
    id: 6,
    name: "Terapia de Sonido Tibetano",
    description: "Cuencos tibetanos auténticos para sanación vibracional y meditación",
    price: 125,
    image: "https://picsum.photos/300/300",
    category: "Terapia Sonora",
    isPermanent: true,
    colors: ["#DAA520", "#FFD700"]
  },
  {
    id: 7,
    name: "Aceite de Eucalipto Puro",
    description: "Aceite esencial de eucalipto para purificación y claridad mental",
    price: 38,
    originalPrice: 48,
    image: "https://picsum.photos/300/300",
    category: "Aceites Esenciales",
    colors: ["#00CED1", "#48D1CC"]
  },
  {
    id: 8,
    name: "Piedras Volcánicas Masaje",
    description: "Set de piedras volcánicas para masajes terapéuticos y relajación profunda",
    price: 65,
    image: "https://picsum.photos/300/300",
    category: "Masajes",
    isPermanent: true,
    colors: ["#2F4F4F", "#696969"]
  },
  {
    id: 9,
    name: "Difusor de Aceites Esenciales",
    description: "Difusor ultrasónico con luces LED para crear atmósferas relajantes",
    price: 75,
    image: "https://picsum.photos/300/300",
    category: "Aromaterapia",
    isNew: true,
    colors: ["#9f97f0", "#ffffff"]
  }
];

export default function ProductosPage() {


  return (
    <div className="min-h-screen bg-principal">
      <ProductHero />
      <ProductFilter />

      {/* Sección de productos */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de información adicional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros productos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada producto está cuidadosamente seleccionado para apoyar tu bienestar holístico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secundario rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">
                Productos elaborados con ingredientes naturales y procesos orgánicos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terciario rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Rigurosos estándares de calidad para asegurar la efectividad de cada producto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secundario rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guía Especializada</h3>
              <p className="text-gray-600">
                Información detallada y consejos de uso para cada producto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrito de compras flotante */}
      <ShoppingCart />
    </div>
  );
} 