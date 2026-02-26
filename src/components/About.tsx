import { motion } from 'motion/react';
import { TranslationSet } from '@/src/i18n/translations';

interface AboutProps {
  about: TranslationSet['about'];
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/assets/who_are_we_image.jpg" 
                alt="RPS Solar Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-ips-blue p-10 hidden md:block">
              <p className="text-ips-yellow text-5xl font-black mb-2">2022</p>
              <p className="text-white text-xs font-bold uppercase tracking-widest">{about.yearsExcellence}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{about.sectionTitle}</h2>
            <p className="text-3xl font-bold text-ips-blue mb-8 leading-tight">
              {about.heading}
            </p>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                {about.paragraph1}
              </p>
              <p>
                {about.paragraph2}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-ips-yellow pl-6">
                <h4 className="font-black text-ips-blue uppercase text-xs tracking-widest mb-2">{about.engineeringTitle}</h4>
                <p className="text-sm text-slate-500">{about.engineeringDesc}</p>
              </div>
              <div className="border-l-2 border-ips-yellow pl-6">
                <h4 className="font-black text-ips-blue uppercase text-xs tracking-widest mb-2">{about.installationTitle}</h4>
                <p className="text-sm text-slate-500">{about.installationDesc}</p>
              </div>
              <div className="border-l-2 border-ips-yellow pl-6">
                <h4 className="font-black text-ips-blue uppercase text-xs tracking-widest mb-2">{about.maintenanceTitle}</h4>
                <p className="text-sm text-slate-500">{about.maintenanceDesc}</p>
              </div>
              <div className="border-l-2 border-ips-yellow pl-6">
                <h4 className="font-black text-ips-blue uppercase text-xs tracking-widest mb-2">{about.consultingTitle}</h4>
                <p className="text-sm text-slate-500">{about.consultingDesc}</p>
              </div>
            </div>

            <button className="btn-outline mt-12">
              {about.downloadProfile}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
