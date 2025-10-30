import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import { ArrowUpRight, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <Hero />

      {/* About */}
      <section id="about" className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(42,46,131,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(246,139,30,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2A2E83]">
                About DIIDOL
              </h2>
              <p className="mt-4 text-[#2A2E83]/80 leading-relaxed">
                We are a premium technology studio focused on IT consultation, software design & development, and mobile experiences. Our approach blends elegant engineering with human-centered design to deliver products that are reliable, scalable, and loved by users.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-100 p-6 bg-gradient-to-br from-white to-[#2A2E83]/5">
                  <Rocket className="h-6 w-6 text-[#F68B1E]" />
                  <p className="mt-3 text-sm font-semibold text-[#2A2E83]">Our Vision</p>
                  <p className="text-sm text-[#2A2E83]/70">Empower organizations through innovative, future-ready software.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-6 bg-gradient-to-br from-white to-[#4BAE4F]/5">
                  <Users className="h-6 w-6 text-[#2A2E83]" />
                  <p className="mt-3 text-sm font-semibold text-[#2A2E83]">Our Mission</p>
                  <p className="text-sm text-[#2A2E83]/70">Deliver premium experiences through craftsmanship, speed, and care.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-slate-100 p-1 bg-white shadow-sm">
                <div className="rounded-2xl bg-gradient-to-br from-[#2A2E83]/10 via-white to-[#F68B1E]/10 p-8">
                  <p className="text-[#2A2E83]/80 leading-relaxed">
                    “DIIDOL is a trusted partner. Their design thinking and engineering rigor helped us launch faster with confidence.”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F68B1E] to-[#E94E1B]" />
                    <div>
                      <p className="text-sm font-semibold text-[#2A2E83]">Product Lead</p>
                      <p className="text-xs text-[#2A2E83]/70">Enterprise Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      {/* Portfolio */}
      <section id="portfolio" className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2A2E83]">Selected Work</h2>
            <p className="mt-3 text-[#2A2E83]/70">A glimpse into products we crafted across web, mobile, and enterprise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <motion.a
                key={i}
                href="#portfolio"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2A2E83]/10 via-white to-[#F68B1E]/10" />
                <div className="p-4">
                  <p className="font-semibold text-[#2A2E83]">Project {i}</p>
                  <p className="text-sm text-[#2A2E83]/70">Web • Mobile • Enterprise</p>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#2A2E83] px-3 py-1 text-xs font-semibold text-white">View <ArrowUpRight className="h-3 w-3"/></span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,78,27,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2A2E83]">Let’s Build Something Innovative Together</h2>
            <p className="mt-3 text-[#2A2E83]/70">Tell us about your goals, and we’ll craft a premium solution.</p>
          </div>

          <form className="mx-auto mt-10 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A2E83]/40" required />
            <input type="email" placeholder="Email" className="rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A2E83]/40" required />
            <input type="text" placeholder="Subject" className="sm:col-span-2 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A2E83]/40" />
            <textarea placeholder="Message" rows={5} className="sm:col-span-2 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A2E83]/40" />
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#2A2E83]/70">
                <span className="inline-block h-2 w-2 rounded-full bg-[#F68B1E]" />
                <span className="inline-block h-2 w-2 rounded-full bg-[#2A2E83]" />
                <span className="inline-block h-2 w-2 rounded-full bg-[#E94E1B]" />
                <span className="inline-block h-2 w-2 rounded-full bg-[#4BAE4F]" />
              </div>
              <button type="submit" className="rounded-full bg-[#2A2E83] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1f2268]">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-br from-[#F68B1E] to-[#2A2E83] p-[2px] shadow-lg"
          aria-label="Back to top"
        >
          <span className="block rounded-full bg-white/95 px-4 py-3 text-[#2A2E83] font-semibold">Top</span>
        </button>
      )}
    </div>
  );
}
