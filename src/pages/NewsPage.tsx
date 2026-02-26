import { ArrowLeft, CalendarDays } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Chatbot from '@/src/components/Chatbot';
import { Locale, translations } from '@/src/i18n/translations';

export default function NewsPage() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('rps_locale');
    return saved === 'en' || saved === 'fr' || saved === 'ar' ? saved : 'en';
  });
  const t = useMemo(() => translations[locale], [locale]);
  const isArabic = locale === 'ar';

  return (
    <div className="min-h-screen bg-ips-gray" dir={isArabic ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} setLocale={setLocale} nav={t.nav} />

      <header className="bg-ips-blue text-white py-12 pt-36">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-ips-yellow transition-colors"
          >
            <ArrowLeft size={14} /> {t.news.backToHome}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mt-6 uppercase tracking-tight">{t.news.pageTitle}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t.news.pageDescription}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.news.items.map((item) => (
            <article key={item.title} className="bg-white border border-slate-200 p-8">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ips-blue mb-4">
                <CalendarDays size={14} className="text-ips-yellow" />
                {item.date}
              </div>
              <h2 className="text-xl font-black text-ips-blue uppercase tracking-wide mb-4">{item.title}</h2>
              {/* <p className="text-slate-600 leading-relaxed text-sm">{item.summary}</p> */}
            </article>
          ))}
        </div>
      </main>

      <Footer footer={t.footer} />
      <Chatbot locale={locale} chatbot={t.chatbot} />
    </div>
  );
}
