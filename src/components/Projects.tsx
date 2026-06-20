import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

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

const categories = ['Semua', 'Konstruksi', 'Renovasi', 'Pengadaan', 'Infrastruktur'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-label">Portofolio</span>
            <h2 className="section-title">Proyek yang Telah Kami Selesaikan</h2>
            <p className="section-subtitle mx-auto">
              Setiap proyek adalah bukti nyata komitmen kami terhadap kualitas dan kepercayaan yang diberikan klien.
            </p>
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-700 text-white shadow-md'
                    : 'bg-white dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <div className="card overflow-hidden group border border-slate-100 dark:border-navy-700">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium flex items-center gap-1">
                      Lihat Detail <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-navy-700/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-navy-900 dark:text-white mb-2 group-hover:text-navy-700 dark:group-hover:text-navy-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
