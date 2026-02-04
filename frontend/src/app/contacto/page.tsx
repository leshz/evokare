import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="bg-principal flex flex-col justify-between">
      <section className="mx-auto grid max-w-7xl items-start gap-16 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Left: Map & Info */}
        <div>
          <div className="mb-8 flex items-center space-x-2"></div>
          <h1 className="mb-4 text-5xl leading-tight font-bold text-gray-900">
            Contactanos <br /> Estés donde estés
          </h1>
          <ContactInfo />
        </div>
        {/* Right: Form */}
        <ContactForm />
      </section>
    </main>
  );
}
