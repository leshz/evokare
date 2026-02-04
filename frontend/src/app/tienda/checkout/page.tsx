import Link from 'next/link';
import { CheckoutForm, OrderSummary } from '@/components/checkout';
import { ShoppingCart } from '@/components/products/ShoppingCart';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-principal">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-secundario">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/productos"
              className="text-gray-500 hover:text-secundario"
            >
              Tienda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>
        </div>
      </div>

      <ShoppingCart />
    </div>
  );
}
