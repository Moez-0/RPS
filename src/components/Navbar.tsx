import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Locale, TranslationSet } from '@/src/i18n/translations';

interface NavbarProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  nav: TranslationSet['nav'];
}

export default function Navbar({ locale, setLocale, nav }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: nav.home, to: '/', isPage: true },
    // { name: nav.news, to: '/news', isPage: true },
    { name: nav.about, to: '#about', isPage: false },
    { name: nav.solutions, to: '#solutions', isPage: false },
    { name: nav.benefits, to: '#benefits', isPage: false },
    { name: nav.contact, to: '#contact', isPage: false },
  ];

  const languageOptions: Array<{ value: Locale; label: string }> = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'ar', label: 'العربية' },
  ];

  const handleLanguageChange = (nextLocale: Locale) => {
    setIsMobileMenuOpen(false);
    if (nextLocale === locale) return;
    localStorage.setItem('rps_locale', nextLocale);
    setLocale(nextLocale);
    window.location.reload();
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/95 flex items-center justify-center shadow-lg p-1">
            <img src="/logo.png" alt="RPS Solar Energy Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-black text-2xl leading-none transition-colors tracking-tighter", isScrolled ? "text-ips-blue" : "text-white")}>RPS SOLAR</span>
            <span className={cn("text-[9px] font-black tracking-[0.3em] transition-colors", isScrolled ? "text-ips-dark" : "text-ips-yellow")}>ENERGY</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.to}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors hover:text-ips-yellow",
                  isScrolled ? "text-ips-dark" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={isHomePage ? link.to : `/${link.to}`}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors hover:text-ips-yellow",
                  isScrolled ? "text-ips-dark" : "text-white"
                )}
              >
                {link.name}
              </a>
            )
          ))}
          <div
            aria-label={nav.language}
            className={cn(
              'flex items-center rounded-md p-1 border',
              isScrolled ? 'bg-white border-slate-300' : 'bg-white/10 backdrop-blur-sm border-white/35'
            )}
          >
            {languageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleLanguageChange(option.value)}
                className={cn(
                  'px-2.5 py-1.5 text-[10px] font-bold tracking-wide rounded transition-colors',
                  locale === option.value
                    ? 'bg-ips-yellow text-ips-blue'
                    : isScrolled
                      ? 'text-ips-dark hover:bg-slate-100'
                      : 'text-white hover:bg-white/20'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a
            href={isHomePage ? '#estimation' : '/#estimation'}
            className="bg-ips-yellow text-ips-blue px-6 py-2 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-ips-blue transition-all"
          >
            {nav.cta}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-ips-dark" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-ips-blue p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-sm font-bold text-white uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={isHomePage ? link.to : `/${link.to}`}
                  className="text-sm font-bold text-white uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <div className="w-full rounded-md border border-white/35 bg-white/10 p-1">
              <div className="grid grid-cols-3 gap-1">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleLanguageChange(option.value)}
                    className={cn(
                      'px-2 py-2 text-[11px] font-bold rounded transition-colors',
                      locale === option.value
                        ? 'bg-ips-yellow text-ips-blue'
                        : 'text-white hover:bg-white/20'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <a
              href={isHomePage ? '#estimation' : '/#estimation'}
              className="bg-ips-yellow text-ips-blue px-6 py-3 text-center font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {nav.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
