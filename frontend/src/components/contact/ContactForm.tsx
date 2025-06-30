import { SocialLinks } from './SocialLinks';

export const ContactForm = () => {
  return (
    <form className="bg-white rounded-2xl shadow-md p-8 space-y-6 w-full max-w-lg mx-auto">
      <div className="text-gray-900 font-semibold mb-2">Rometheme STD</div>
      <div className="flex gap-4 mb-4">
        <input
          type="email"
          placeholder="hello@domainsite.com"
          className="flex-1 bg-[#e6f0e6] text-gray-900 px-4 py-3 rounded-md border border-transparent focus:border-secundario focus:outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="flex-1 bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Message"
          className="w-full bg-white text-gray-900 px-4 py-3 rounded-md border border-gray-200 focus:border-secundario focus:outline-none min-h-[120px]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-secundario text-white py-4 rounded-full flex items-center justify-center gap-2 text-lg font-medium hover:bg-terciario transition-colors"
      >
        Send Message
        <span className="inline-block bg-white bg-opacity-30 rounded-full p-2 ml-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
        </span>
      </button>
      <SocialLinks />
    </form>
  );
}; 