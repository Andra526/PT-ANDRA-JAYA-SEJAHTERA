import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { services } from '../data';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="layanan" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Layanan Kami</span>
            <h2 className="section-title">Solusi Lengkap untuk Setiap Kebutuhan</h2>
            <p className="section-subtitle mx-auto">
              Dari perencanaan hingga penyelesaian, kami menyediakan layanan komprehensif yang disesuaikan dengan kebutuhan spesifik proyek Anda.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <div className="card p-6 h-full flex flex-col group cursor-default border border-slate-100 dark:border-navy-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl flex-shrink-0 w-12 h-12 bg-navy-50 dark:bg-navy-800 rounded-xl flex items-center justify-center group-hover:bg-navy-100 dark:group-hover:bg-navy-700 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy-900 dark:text-white leading-tight pt-1">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-navy-600 dark:text-navy-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
