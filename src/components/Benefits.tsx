import { motion } from 'motion/react';
import { TranslationSet } from '@/src/i18n/translations';

interface BenefitsProps {
  benefits: TranslationSet['benefits'];
}

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{benefits.sectionTitle}</h2>
            <p className="text-3xl font-bold text-ips-blue mb-8 leading-tight">
              {benefits.heading}
            </p>
            <div className="grid sm:grid-cols-2 gap-10">
              {benefits.items.map((benefit) => (
                <div key={benefit.title}>
                  <div className="w-10 h-1 bg-ips-yellow mb-4" />
                  <h4 className="font-black text-ips-blue uppercase text-xs tracking-widest mb-3">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src="/assets/3.jpg" 
                alt="Solar Panel Close-up" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 left-10 bg-ips-yellow p-8 hidden md:block">
              <p className="text-ips-blue text-4xl font-black">100%</p>
              <p className="text-ips-blue text-[10px] font-bold uppercase tracking-widest">{benefits.cleanEnergy}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
