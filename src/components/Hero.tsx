import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TranslationSet } from '@/src/i18n/translations';

interface HeroProps {
  hero: TranslationSet['hero'];
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_background.jpg"
          alt="Industrial Solar Field"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ips-blue/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-ips-blue/80 via-ips-blue/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="w-24 h-1.5 bg-ips-yellow mb-10" />
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            {hero.titleLine1} <br />
            <span className="text-ips-yellow">{hero.titleLine2}</span>
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-xl leading-relaxed font-medium uppercase tracking-widest text-sm">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#solutions"
              className="btn-primary flex items-center gap-3"
            >
              {hero.primaryButton} <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-3 font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-ips-blue transition-all duration-300"
            >
              {hero.secondaryButton}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-ips-yellow py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="text-ips-blue font-black text-2xl">4+</span>
              <span className="text-ips-blue/70 text-[10px] font-bold uppercase tracking-widest">{hero.yearsExperience}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-ips-blue font-black text-2xl">120+</span>
              <span className="text-ips-blue/70 text-[10px] font-bold uppercase tracking-widest">{hero.projectsCompleted}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-ips-blue font-black text-2xl">8MW</span>
              <span className="text-ips-blue/70 text-[10px] font-bold uppercase tracking-widest">{hero.totalCapacity}</span>
            </div>
          </div>
          <div className="text-ips-blue font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            {hero.scrollToExplore} <div className="w-8 h-px bg-ips-blue" />
          </div>
        </div>
      </div>
    </section>
  );
}
