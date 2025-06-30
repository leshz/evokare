import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-principal flex flex-col justify-between">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Map & Info */}
        <div>
          <div className="mb-8 flex items-center space-x-2">
            <span className="text-secundario text-xl">❤</span>
            <span className="text-gray-700 font-medium">Contact Us</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Get In Touch With <br /> Our Caring Team
          </h1>
          <ContactInfo />
          <ContactMap />
        </div>
        {/* Right: Form */}
        <ContactForm />
      </section>
    </main>
  );
} 