import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-colors duration-500';
  const bgClasses = scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-sm'
    : 'bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm';

  return (
    <header className={`${baseClasses} ${bgClasses}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-[6px] bg-gradient-to-br from-[#F68B1E] via-[#E94E1B] to-[#2A2E83] shadow-md"></div>
            <span className="font-semibold tracking-tight text-[#2A2E83]">DIIDOL IT Solutions</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2A2E83]/80 hover:text-[#2A2E83] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#F68B1E] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_-10px_rgba(246,139,30,.7)] hover:bg-[#E94E1B] transition-colors"
            >
              Get Consultation
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#2A2E83] hover:bg-[#2A2E83]/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-[#2A2E83] hover:bg-[#2A2E83]/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-[#F68B1E] px-3 py-2 text-center font-semibold text-white"
            >
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
