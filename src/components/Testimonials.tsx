import { motion } from 'motion/react';
import { TranslationSet } from '@/src/i18n/translations';

interface TestimonialsProps {
  testimonials: TranslationSet['testimonials'];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 bg-ips-blue text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-ips-yellow text-xs font-bold uppercase tracking-[0.3em] mb-4">{testimonials.sectionTag}</h2>
          <h3 className="text-4xl font-black uppercase leading-tight">{testimonials.sectionTitle}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-4 border-ips-yellow pl-8 py-4"
            >
              <p className="text-xl italic mb-8 text-white/80 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-black uppercase text-sm tracking-widest">{t.name}</h4>
                <p className="text-ips-yellow text-xs font-bold uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
