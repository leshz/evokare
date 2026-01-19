import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilter } from '@/components/products/ProductFilter';
import { ShoppingCart } from '@/components/products/ShoppingCart';
import { getProductosContentService } from '@/services/productos';
import { renderSection } from '@/lib/component-factory';

const productos = [
  {
    id: 1,
    name: 'Aceite de Lavanda Premium',
    description:
      'Aceite esencial puro de lavanda francesa para relajación y bienestar mental',
    price: 49,
    originalPrice: 65,
    image: 'https://picsum.photos/300/300',
    category: 'Aceites Esenciales',
    isNew: true,
    colors: ['#9f97f0', '#5893f7'],
  },
  {
    id: 2,
    name: 'Cristales de Cuarzo Rosa',
    description:
      'Cristales naturales de cuarzo rosa para equilibrio emocional y amor propio',
    price: 35,
    image: 'https://picsum.photos/300/300',
    category: 'Cristales',
    isPermanent: true,
    colors: ['#ff9999', '#ffb3b3'],
  },
  {
    id: 3,
    name: 'Kit de Meditación Completo',
    description:
      'Set completo con cojín, incienso y guía de meditación para principiantes',
    price: 89,
    image: 'https://picsum.photos/300/300',
    category: 'Meditación',
    isPermanent: true,
    colors: ['#9f97f0', '#ffffff'],
  },
  {
    id: 4,
    name: 'Infusión Herbal Relajante',
    description:
      'Mezcla natural de hierbas para promover la calma y el sueño reparador',
    price: 28,
    originalPrice: 35,
    image: 'https://picsum.photos/300/300',
    category: 'Hierbas',
    colors: ['#90EE90', '#98FB98'],
  },
  {
    id: 5,
    name: 'Velas de Aromaterapia',
    description:
      'Velas artesanales con aceites esenciales para crear ambientes de paz',
    price: 42,
    image: 'https://picsum.photos/300/300',
    category: 'Aromaterapia',
    isNew: true,
    colors: ['#9f97f0', '#5893f7'],
  },
  {
    id: 6,
    name: 'Terapia de Sonido Tibetano',
    description:
      'Cuencos tibetanos auténticos para sanación vibracional y meditación',
    price: 125,
    image: 'https://picsum.photos/300/300',
    category: 'Terapia Sonora',
    isPermanent: true,
    colors: ['#DAA520', '#FFD700'],
  },
  {
    id: 7,
    name: 'Aceite de Eucalipto Puro',
    description:
      'Aceite esencial de eucalipto para purificación y claridad mental',
    price: 38,
    originalPrice: 48,
    image: 'https://picsum.photos/300/300',
    category: 'Aceites Esenciales',
    colors: ['#00CED1', '#48D1CC'],
  },
  {
    id: 8,
    name: 'Piedras Volcánicas Masaje',
    description:
      'Set de piedras volcánicas para masajes terapéuticos y relajación profunda',
    price: 65,
    image: 'https://picsum.photos/300/300',
    category: 'Masajes',
    isPermanent: true,
    colors: ['#2F4F4F', '#696969'],
  },
  {
    id: 9,
    name: 'Difusor de Aceites Esenciales',
    description:
      'Difusor ultrasónico con luces LED para crear atmósferas relajantes',
    price: 75,
    image: 'https://picsum.photos/300/300',
    category: 'Aromaterapia',
    isNew: true,
    colors: ['#9f97f0', '#ffffff'],
  },
];

export default async function ProductosPage() {
  const response = await getProductosContentService();
  const { secciones = [] } = response.data;

  return (
    <div className="bg-principal min-h-screen">
      {secciones.map((section, index) => renderSection(section, index))}

      <ProductFilter />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productos.map(producto => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      <ShoppingCart />
    </div>
  );
}
