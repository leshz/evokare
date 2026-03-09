import Link from 'next/link';
import { CheckoutForm, OrderSummary } from '@/components/checkout';
import { ShoppingCart } from '@/components/products/ShoppingCart';

export default function CheckoutPage() {
  return (
    <div className="bg-principal min-h-screen">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:text-secundario text-gray-500">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/productos"
              className="hover:text-secundario text-gray-500"
            >
              Productos
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>
        </div>
      </div>

      <ShoppingCart />
    </div>
  );
}
