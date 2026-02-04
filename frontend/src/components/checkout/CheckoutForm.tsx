'use client';

import { useState, useMemo } from 'react';
import { useSyncExternalStore } from 'react';
import { Formik, Form } from 'formik';
import { Loader2 } from 'lucide-react';
import { useCartStore } from '@/store';
import { processCheckout } from '@/services/checkout';
import { checkoutSchema } from '@/lib/validations/checkout-schema';
import { BillingFields } from './BillingFields';
import { ShippingFields } from './ShippingFields';
import type { CheckoutFormValues } from '@/services/checkout/types';

const emptySubscribe = () => () => {};

const initialValues: CheckoutFormValues = {
  nombres: '',
  apellidos: '',
  cedula: '',
  email: '',
  telefono: '',
  departamento: '',
  ciudad: '',
  direccion: '',
  codigoPostal: '',
  notas: '',
};

export function CheckoutForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const hasItems = useMemo(() => items.length > 0, [items]);

  const handleSubmit = async (values: CheckoutFormValues) => {
    setSubmitError(null);

    if (!hasItems) {
      setSubmitError('No hay productos en el carrito');
      return;
    }

    try {
      const response = await processCheckout({
        customer: {
          dni: parseInt(values.cedula, 10),
          name: values.nombres,
          lastName: values.apellidos,
          email: values.email,
          phone: parseInt(values.telefono, 10),
        },
        fulfillment: {
          address: values.direccion,
          department: values.departamento,
          city: values.ciudad,
          postalCode: values.codigoPostal || undefined,
          message: values.notas || undefined,
        },
        items: items.map((item) => ({ sku: item.sku, quantity: item.quantity })),
      });

      clearCart();
      window.location.href = response.init_point;
    } catch (error) {
      console.error('Checkout error:', error);
      setSubmitError(
        'Hubo un error al procesar tu pedido. Por favor intenta de nuevo.'
      );
    }
  };

  if (!isHydrated) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="h-12 rounded bg-gray-200" />
          <div className="h-12 rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-8" noValidate>
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Detalles de facturación
            </h2>
            <BillingFields />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Detalles de envío
            </h2>
            <ShippingFields />
          </div>

          {submitError && (
            <div className="rounded-lg bg-red-50 p-4 text-red-700">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !hasItems}
            className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-secundario to-terciario py-4 text-lg font-medium text-white transition-all hover:from-terciario hover:to-secundario ${
              (isSubmitting || !hasItems) && 'cursor-not-allowed opacity-50'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Procesando...
              </>
            ) : (
              'Realizar pedido'
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
