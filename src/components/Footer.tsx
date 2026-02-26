import { Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { TranslationSet } from '@/src/i18n/translations';

interface FooterProps {
  footer: TranslationSet['footer'];
}

export default function Footer({ footer }: FooterProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-ips-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white flex items-center justify-center p-1">
                <img src="/logo.png" alt="RPS Solar Energy Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">RPS SOLAR</span>
                <span className="text-[8px] font-bold tracking-[0.2em] text-ips-yellow">ENERGY</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {footer.aboutText}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/RPSMSAKEN' },
                { Icon: Instagram, href: 'https://www.instagram.com/rps.solar/' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/rps-solar-energy' },
                
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-ips-yellow hover:text-ips-blue transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-8 text-ips-yellow">{footer.quickLinks}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { label: footer.home, href: '/' },
                { label: footer.news, href: '/news' },
                { label: footer.about, href: '#about', isSection: true },
                { label: footer.solutions, href: '#solutions', isSection: true },
                { label: footer.contactLink, href: '#contact', isSection: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.isSection ? (
                    <a href={isHomePage ? link.href : `/${link.href}`} className="hover:text-ips-yellow transition-colors uppercase tracking-widest text-[10px] font-bold">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="hover:text-ips-yellow transition-colors uppercase tracking-widest text-[10px] font-bold">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-8 text-ips-yellow">{footer.solutions}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[footer.industrial, footer.commercial, footer.residential, footer.storage, footer.maintenance].map((link) => (
                <li key={link}>
                  <a href={isHomePage ? '#solutions' : '/#solutions'} className="hover:text-ips-yellow transition-colors uppercase tracking-widest text-[10px] font-bold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-8 text-ips-yellow">{footer.contact}</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone size={16} className="text-ips-yellow shrink-0" />
                <p className="text-sm text-slate-400">+216 27 139 263</p>
              </li>
              <li className="flex gap-4">
                <MapPin size={16} className="text-ips-yellow shrink-0" />
                <p className="text-sm text-slate-400">
                  Rue 20 Mars en face kiosque Agil, <br />Msaken, Tunisia, 4070
                </p>
              </li>
              <li className="flex gap-4">
                <MapPin size={16} className="text-ips-yellow shrink-0" />
                <a
                  href="https://www.google.com/maps/place/RPS+Razgallah+Photovolta%C3%AFque+%26+Service/data=!4m2!3m1!1s0x0:0xfc85badd1a63c21e?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 hover:text-ips-yellow transition-colors"
                >
                  {footer.viewMap}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>{footer.rights}</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">{footer.privacy}</Link>
            <Link to="/" className="hover:text-white transition-colors">{footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
