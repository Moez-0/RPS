import { useMemo, useState } from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Solutions from '@/src/components/Solutions';
import Benefits from '@/src/components/Benefits';
import EstimationTool from '@/src/components/EstimationTool';
import Testimonials from '@/src/components/Testimonials';
import ContactSection from '@/src/components/ContactSection';
import Footer from '@/src/components/Footer';
import Chatbot from '@/src/components/Chatbot';
import { Locale, translations } from '@/src/i18n/translations';

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('rps_locale');
    return saved === 'en' || saved === 'fr' || saved === 'ar' ? saved : 'en';
  });
  const t = useMemo(() => translations[locale], [locale]);
  const isArabic = locale === 'ar';

  return (
    <div className="relative" dir={isArabic ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} setLocale={setLocale} nav={t.nav} />

      <main>
        <Hero hero={t.hero} />
        <About about={t.about} />
        <Solutions solutions={t.solutions} />
        <Benefits benefits={t.benefits} />
        <EstimationTool estimation={t.estimation} />
        <Testimonials testimonials={t.testimonials} />
        <ContactSection contact={t.contact} />
      </main>

      <Footer footer={t.footer} />
      <Chatbot locale={locale} chatbot={t.chatbot} />
    </div>
  );
}
