import { ProductGallery } from "@/components/product-overview/ProductGallery";
import { ProductInfo } from "@/components/product-overview/ProductInfo";
import { ProductReviews } from "@/components/product-overview/ProductReviews";
import { RelatedProducts } from "@/components/product-overview/RelatedProducts";
import { TherapyBooking } from "@/components/product-overview/TherapyBooking";
import { ShoppingCart } from "@/components/products/ShoppingCart";
import Link from 'next/link';
import type { TherapyProduct } from '@/components/product-overview/TherapyBooking';

// Mock data - en producción esto vendría de una API
const productos = [
  {
    id: 1,
    name: "Aceite de Lavanda Premium",
    description: "Aceite esencial puro de lavanda francesa para relajación y bienestar mental",
    fullDescription: "Nuestro aceite esencial de lavanda premium es extraído de campos selectos de Provenza, Francia. Conocido por sus propiedades calmantes y relajantes, este aceite de grado terapéutico es perfecto para reducir el estrés, mejorar la calidad del sueño y promover un estado de paz interior. Cada gota contiene la esencia pura de la lavanda, sin aditivos ni diluyentes.",
    price: 49,
    originalPrice: 65,
    images: [
      "https://picsum.photos/600/600?random=1",
      "https://picsum.photos/600/600?random=2",
      "https://picsum.photos/600/600?random=3",
      "https://picsum.photos/600/600?random=4"
    ],
    category: "Aceites Esenciales",
    isNew: true,
    colors: ["#9f97f0", "#5893f7"],
    benefits: [
      "Reduce el estrés y la ansiedad",
      "Mejora la calidad del sueño",
      "Propiedades antiinflamatorias",
      "Aroma relajante y calmante"
    ],
    howToUse: "Agrega 2-3 gotas en un difusor, aplica diluido en puntos de pulso o agrega a tu baño nocturno.",
    ingredients: ["Lavandula angustifolia (Lavender) Oil", "100% puro"],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    isTherapyProduct: false
  },
  {
    id: 2,
    name: "Cristales de Cuarzo Rosa",
    description: "Cristales naturales de cuarzo rosa para equilibrio emocional y amor propio",
    fullDescription: "Los cristales de cuarzo rosa son conocidos como la piedra del amor incondicional y la sanación emocional. Estos hermosos cristales naturales ayudan a abrir el chakra del corazón, promoviendo el amor propio, la compasión y la sanación de heridas emocionales. Cada cristal es único y ha sido cuidadosamente seleccionado por su calidad y energía vibracional.",
    price: 35,
    images: [
      "https://picsum.photos/600/600?random=5",
      "https://picsum.photos/600/600?random=6",
      "https://picsum.photos/600/600?random=7"
    ],
    category: "Cristales",
    isPermanent: true,
    colors: ["#ff9999", "#ffb3b3"],
    benefits: [
      "Promueve el amor propio",
      "Sanación emocional",
      "Equilibra el chakra del corazón",
      "Reduce el estrés emocional"
    ],
    howToUse: "Mantén cerca durante la meditación, lleva contigo o coloca en tu espacio personal.",
    ingredients: ["Cuarzo Rosa Natural", "100% auténtico"],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    isTherapyProduct: false
  },
  {
    id: 3,
    name: "Sesión de Terapia Holística",
    description: "Sesión personalizada de terapia holística para tu bienestar integral",
    fullDescription: "Nuestras sesiones de terapia holística combinan técnicas ancestrales con enfoques modernos para abordar tu bienestar de manera integral. Cada sesión es personalizada según tus necesidades específicas, incorporando elementos como aromaterapia, cristaloterapia, meditación guiada y técnicas de respiración. Trabajamos contigo para crear un espacio seguro de sanación y crecimiento personal.",
    price: 89,
    images: [
      "https://picsum.photos/600/600?random=8",
      "https://picsum.photos/600/600?random=9",
      "https://picsum.photos/600/600?random=10"
    ],
    category: "Terapia",
    isPermanent: true,
    colors: ["#9f97f0", "#ffffff"],
    benefits: [
      "Reduce estrés y ansiedad",
      "Mejora el equilibrio emocional",
      "Promueve el autoconocimiento",
      "Técnicas de relajación profunda"
    ],
    howToUse: "Reserva tu sesión y prepárate para una experiencia transformadora.",
    ingredients: ["Terapia personalizada", "Técnicas holísticas"],
    inStock: true,
    rating: 5.0,
    reviewCount: 234,
    isTherapyProduct: true,
    duration: "60 minutos",
    therapist: "Dra. Ana María González - Terapeuta Holística Certificada"
  }
];

export default async function ProductOverview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = productos.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-principal flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-8">El producto que buscas no existe o ha sido removido.</p>
          <Link
            href="/productos"
            className="bg-gradient-to-br from-secundario to-terciario text-white px-6 py-3 rounded-full hover:bg-gradient-to-br hover:from-terciario hover:to-secundario transition-all"
          >
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-principal">
      {/* Breadcrumb */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-secundario">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-gray-500 hover:text-secundario">Productos</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galería de imágenes */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Información del producto */}
          <ProductInfo product={product} />
        </div>

        {/* Sección de reserva de terapia (solo para productos de terapia) */}
        {product.isTherapyProduct && product.duration && (
          <div className="mt-16">
            <TherapyBooking product={product as TherapyProduct} />
          </div>
        )}

        {/* Reseñas */}
        <div className="mt-16">
          <ProductReviews rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        {/* Productos relacionados */}
        <div className="mt-16">
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
      </div>

      {/* Carrito de compras */}
      <ShoppingCart />
    </div>
  );
} 