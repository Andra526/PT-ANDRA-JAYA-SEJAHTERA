import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800 dark:bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-navy-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Mulai Sekarang
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Siap Mewujudkan Proyek Anda?
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Konsultasikan kebutuhan proyek Anda bersama tim profesional kami. Kami siap memberikan solusi terbaik yang sesuai dengan anggaran dan timeline Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy-800 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base"
            >
              <PhoneCall className="w-5 h-5" />
              Hubungi Kami Sekarang
            </a>
            <a
              href="#layanan"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#layanan')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Pelajari Layanan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
