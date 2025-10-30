import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">{/** No negative z-index to keep Spline visible */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]"
        >
          Innovating Technology. Empowering Digital Growth.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-3xl text-base md:text-lg text-white/80"
        >
          We build smart software, modern web solutions, and mobile apps that transform businesses.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-[#F68B1E] px-6 py-3 font-semibold text-white shadow-[0_15px_30px_-10px_rgba(246,139,30,0.8)] hover:bg-[#E94E1B] transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </section>
  );
}
