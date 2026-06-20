import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { companyValues } from '../data';
import { Target, Eye } from 'lucide-react';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="tentang" className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Tentang Kami</span>
            <h2 className="section-title">Membangun dengan Kualitas dan Kepercayaan</h2>
            <p className="section-subtitle mx-auto">
              Lebih dari satu dekade, PT Andra Jaya Sejahtera hadir sebagai mitra konstruksi terpercaya yang mengutamakan integritas dan kepuasan pelanggan.
            </p>
          </div>
        </FadeIn>

        {/* Story + Vision Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <FadeIn delay={0.1}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Tim PT Andra Jaya Sejahtera"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-navy-700 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-display font-bold text-3xl">10+</div>
                <div className="text-navy-200 text-sm font-medium">Tahun Pengalaman</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-navy-900 dark:text-white mb-3">Sejarah Perusahaan</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Didirikan pada tahun 2014, PT Andra Jaya Sejahtera berawal dari semangat untuk menghadirkan layanan konstruksi dan pengadaan yang profesional dan terjangkau bagi klien di seluruh Indonesia. Selama lebih dari satu dekade, kami telah berkembang menjadi perusahaan kontraktor terpercaya dengan portofolio lebih dari 100 proyek sukses.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-navy-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-navy-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-navy-100 dark:bg-navy-700 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-navy-700 dark:text-navy-300" />
                    </div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">Visi</h4>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Menjadi perusahaan kontraktor dan pengadaan terkemuka di Indonesia yang dikenal atas kualitas, inovasi, dan integritas.
                  </p>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-navy-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-navy-100 dark:bg-navy-700 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-navy-700 dark:text-navy-300" />
                    </div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">Misi</h4>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Memberikan solusi konstruksi terbaik melalui tim profesional, teknologi modern, dan komitmen penuh terhadap kepuasan klien.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Values */}
        <FadeIn delay={0.1}>
          <h3 className="font-display font-bold text-2xl text-navy-900 dark:text-white text-center mb-10">
            Nilai-Nilai Perusahaan
          </h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="card p-6 text-center group">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="font-display font-semibold text-lg text-navy-900 dark:text-white mb-2 group-hover:text-navy-700 dark:group-hover:text-navy-300 transition-colors">
                  {value.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
