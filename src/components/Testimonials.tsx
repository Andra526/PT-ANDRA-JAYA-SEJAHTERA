import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

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

export function Testimonials() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Testimoni</span>
            <h2 className="section-title">Apa Kata Klien Kami</h2>
            <p className="section-subtitle mx-auto">
              Kepercayaan dan kepuasan klien adalah penghargaan terbesar bagi kami dalam setiap pekerjaan yang kami selesaikan.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.1}>
              <div className="card p-6 h-full flex flex-col border border-slate-100 dark:border-navy-700">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-navy-200 dark:text-navy-700" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-navy-700">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-2 ring-navy-100 dark:ring-navy-700"
                  />
                  <div>
                    <div className="font-semibold text-navy-900 dark:text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 dark:text-slate-500 text-xs">
                      {testimonial.position} · {testimonial.company}
                    </div>
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
