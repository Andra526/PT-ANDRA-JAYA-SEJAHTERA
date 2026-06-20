import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { teamMembers } from '../data';

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

export function Team() {
  return (
    <section id="tim" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Tim Kami</span>
            <h2 className="section-title">Digerakkan oleh Para Profesional</h2>
            <p className="section-subtitle mx-auto">
              Tim kami terdiri dari para ahli berpengalaman yang berdedikasi penuh untuk menghadirkan hasil terbaik di setiap proyek.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.1}>
              <div className="card overflow-hidden group border border-slate-100 dark:border-navy-700 text-center">
                {/* Photo */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-navy-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-navy-700 hover:text-white"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-navy-900 dark:text-white text-base mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-800 px-3 py-1 rounded-full mb-3">
                    {member.position}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
