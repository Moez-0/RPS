import { motion } from 'motion/react';
import { TranslationSet } from '@/src/i18n/translations';

interface SolutionsProps {
  solutions: TranslationSet['solutions'];
}

export default function Solutions({ solutions: solutionsText }: SolutionsProps) {
  return (
    <section id="solutions" className="py-24 bg-ips-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="section-title">{solutionsText.sectionTitle}</h2>
          <p className="text-slate-600 max-w-3xl mt-4 mx-auto">
            {solutionsText.sectionDesc}
          </p>
          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-ips-blue">{solutionsText.distributorLine}</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-ips-yellow">{solutionsText.serviceLine}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {solutionsText.badges.map((badge) => (
              <span key={badge} className="px-4 py-2 text-xs font-semibold uppercase tracking-wide border border-slate-300 bg-white text-slate-700">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutionsText.products.map((product, index) => (
            <motion.div
              key={`${product.brand}-${product.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group overflow-hidden border border-slate-200"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-ips-yellow">{product.brand}</p>
                <h3 className="text-lg font-black text-ips-blue mt-2 mb-4 uppercase tracking-wider">{product.title}</h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">{product.overview}</p>

                <ul className="space-y-2 mb-6">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-ips-yellow font-black">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.electricalSpecs.map((spec) => (
                    <div key={spec.label} className="border border-slate-200 bg-ips-gray p-3">
                      <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">{spec.label}</p>
                      <p className="text-sm text-ips-blue font-bold mt-1">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-700 font-medium">
                  <span className="text-ips-blue font-black">{solutionsText.bestForLabel}:</span> {product.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 border border-slate-200 bg-white overflow-x-auto"
        >
          <h3 className="text-lg font-black text-ips-blue uppercase tracking-wider p-6 pb-0">{solutionsText.comparison.title}</h3>
          <table className="w-full min-w-[640px] text-sm mt-4">
            <thead>
              <tr className="bg-ips-gray border-y border-slate-200">
                {solutionsText.comparison.headers.map((header) => (
                  <th key={header} className="text-left p-4 font-bold text-slate-700 uppercase tracking-wider text-xs">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {solutionsText.comparison.rows.map((row) => (
                <tr key={row[0]} className="border-b border-slate-100">
                  {row.map((cell) => (
                    <td key={`${row[0]}-${cell}`} className="p-4 text-slate-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-8 text-center">
          <a href="#contact" className="btn-primary">
            {solutionsText.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
