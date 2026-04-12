import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactMap } from '@/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <main className="bg-surface-soft flex flex-col justify-between">
      <section className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-8 flex items-center space-x-2"></div>
          <h1 className="text-text-primary mb-4 text-4xl leading-tight font-bold sm:text-5xl">
            Contáctanos <br /> Estés donde estés
          </h1>
          <ContactInfo />
          {/* <div className="mt-8">
            <ContactMap />
          </div> */}
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
