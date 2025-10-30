import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-[6px] bg-gradient-to-br from-[#F68B1E] via-[#E94E1B] to-[#2A2E83]" />
              <span className="font-semibold text-[#2A2E83]">DIIDOL IT Solutions</span>
            </div>
            <p className="mt-4 text-sm text-[#2A2E83]/70 max-w-sm">
              A premium technology partner for IT consultation, bespoke software, and mobile apps.
            </p>
          </div>

          <div>
            <h4 className="text-[#2A2E83] font-semibold">Newsletter</h4>
            <p className="mt-2 text-sm text-[#2A2E83]/70">Stay updated on insights and product launches.</p>
            <form className="mt-4 flex max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A2E83]/40"
              />
              <button
                type="submit"
                className="rounded-md bg-[#F68B1E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#E94E1B]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-[#2A2E83] font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#2A2E83]/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +1 (000) 000-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@diidol.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Global • Remote-first</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#2A2E83]/60">© {new Date().getFullYear()} DIIDOL IT Solutions. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#F68B1E]" />
            <span className="h-2 w-2 rounded-full bg-[#2A2E83]" />
            <span className="h-2 w-2 rounded-full bg-[#E94E1B]" />
            <span className="h-2 w-2 rounded-full bg-[#4BAE4F]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
