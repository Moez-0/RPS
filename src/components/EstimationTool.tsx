import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TranslationSet } from '@/src/i18n/translations';

interface EstimationToolProps {
  estimation: TranslationSet['estimation'];
}

export default function EstimationTool({ estimation }: EstimationToolProps) {
  const [step, setStep] = useState(1);
  const [bill, setBill] = useState(150);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(2);
    }, 1500);
  };

  const estimatedSavings = bill * 0.85 * 12 * 25; // 25 years
  const monthlySavings = bill * 0.85;

  const formatTnd = (amount: number) => `${amount.toLocaleString()} TND`;

  return (
    <section id="estimation" className="py-24 bg-ips-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20 bg-ips-blue text-white">
              <h2 className="text-3xl font-black uppercase mb-6 leading-tight">
                {estimation.titleLine1} <br />
                <span className="text-ips-yellow">{estimation.titleLine2}</span>
              </h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                {estimation.description}
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-ips-yellow flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-ips-blue" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest">{estimation.bullet1}</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-ips-yellow flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-ips-blue" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest">{estimation.bullet2}</p>
                </li>
              </ul>
            </div>

            <div className="p-12 md:p-20">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="mb-10">
                      <label className="block text-xs font-black text-ips-blue uppercase tracking-[0.2em] mb-6">
                        {estimation.monthlyBill}: <span className="text-ips-blue text-lg ml-2">{formatTnd(bill)}</span>
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="2000"
                        step="50"
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ips-blue"
                      />
                      <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>50 TND</span>
                        <span>2,000+ TND</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCalculate}
                      disabled={isCalculating}
                      className="btn-primary w-full flex items-center justify-center gap-3"
                    >
                      {isCalculating ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>{estimation.generateEstimate} <ArrowRight size={18} /></>
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="space-y-6 mb-10">
                      <div className="border-b border-slate-100 pb-6 flex justify-between items-end">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{estimation.monthlySavings}</span>
                        <span className="text-3xl font-black text-ips-blue">{formatTnd(Number(monthlySavings.toFixed(0)))}</span>
                      </div>
                      <div className="bg-ips-gray p-8 text-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block mb-2">{estimation.projectedSavings}</span>
                        <span className="text-5xl font-black text-ips-blue">{formatTnd(Math.round(estimatedSavings))}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border-2 border-slate-200 font-bold text-xs uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-colors"
                      >
                        {estimation.recalculate}
                      </button>
                      <a href="#contact" className="flex-[2] btn-primary text-center">
                        {estimation.requestAudit}
                      </a>
                    </div>

                    <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                      {estimation.chatbotHint}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
