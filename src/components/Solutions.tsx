import { motion } from 'motion/react';
import { TranslationSet } from '@/src/i18n/translations';

const solutions = [
  {
    image: '/assets/1.jpg'
  },
  {
    image: '/assets/2.jpg'
  },
  {
    image: '/assets/3.jpg'
  },
  {
    image: '/assets/4.jpg'
  }
];

interface SolutionsProps {
  solutions: TranslationSet['solutions'];
}

export default function Solutions({ solutions: solutionsText }: SolutionsProps) {
  return (
    <section id="solutions" className="py-24 bg-ips-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="section-title">{solutionsText.sectionTitle}</h2>
          <p className="text-slate-600 max-w-2xl mt-4">
            {solutionsText.sectionDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group overflow-hidden border border-slate-200"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solutionsText.items[index].title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-lg font-black text-ips-blue mb-4 uppercase tracking-wider">{solutionsText.items[index].title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {solutionsText.items[index].description}
                </p>
                <a href="#contact" className="text-xs font-bold text-ips-blue uppercase tracking-widest flex items-center gap-2 group-hover:text-ips-yellow transition-colors">
                  {solutionsText.readMore} <div className="w-4 h-px bg-ips-blue group-hover:bg-ips-yellow transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
