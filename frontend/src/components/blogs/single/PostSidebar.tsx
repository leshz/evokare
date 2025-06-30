import { Blog } from '../BlogData';

interface PostSidebarProps {
  currentSlug: string;
  blogs: Blog[];
}

export const PostSidebar = ({ currentSlug, blogs }: PostSidebarProps) => {
  const related = blogs.filter((b) => b.slug !== currentSlug).slice(0, 3);

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <ol className="space-y-4">
          {related.map((b, i) => (
            <li key={b.slug} className="flex items-center justify-between gap-2">
              <span className="text-secundario font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 text-gray-900 text-sm font-medium">{b.title}</span>
              <a href={`/blogs/${b.slug}`} className="text-secundario hover:text-terciario p-2 rounded-full transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div className="bg-secundario rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center">
        <div className="mb-2">Reach Out Today</div>
        <div className="font-bold text-lg mb-4">Start Your Healing Journey Today</div>
        <a href="/contacto" className="bg-principal text-secundario px-6 py-2 rounded-full font-medium hover:bg-white transition-colors">Contact Us</a>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-secundario text-secundario hover:bg-secundario hover:text-white transition-colors">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.11A12.13 12.13 0 0 0 7.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" /></svg>
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-secundario text-secundario hover:bg-secundario hover:text-white transition-colors">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" fill="white" /></svg>
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-secundario text-secundario hover:bg-secundario hover:text-white transition-colors">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4-10H8V6h8v2z" /></svg>
        </a>
      </div>
    </aside>
  );
}; 