import { Code2, Smartphone, Briefcase, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'IT Consultation',
    desc: 'Strategic guidance to align technology with business goals and accelerate digital transformation.',
    icon: Briefcase,
    color: 'from-[#2A2E83] to-[#4BAE4F]',
  },
  {
    title: 'Software Design & Development',
    desc: 'Elegant architectures, robust APIs, and delightful user experiences tailored to your needs.',
    icon: Code2,
    color: 'from-[#F68B1E] to-[#E94E1B]',
  },
  {
    title: 'Web Application Development',
    desc: 'High-performance, SEO-friendly web apps with modern stacks and best practices.',
    icon: Cloud,
    color: 'from-[#2A2E83] to-[#F68B1E]',
  },
  {
    title: 'Mobile App Development',
    desc: 'Native-quality iOS and Android apps with smooth UX and scalable backends.',
    icon: Smartphone,
    color: 'from-[#4BAE4F] to-[#2A2E83]',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#2A2E83]/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2A2E83]">Our Services</h2>
          <p className="mt-3 text-[#2A2E83]/70 max-w-2xl mx-auto">
            We partner with you to design, build, and scale resilient digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow`}> 
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2E83]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2A2E83]/70">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl bg-gradient-to-br ${s.color} opacity-40`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
