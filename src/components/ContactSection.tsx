import { MapPin, Phone } from 'lucide-react';
import { TranslationSet } from '@/src/i18n/translations';

interface ContactSectionProps {
  contact: TranslationSet['contact'];
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="section-title">{contact.sectionTitle}</h2>
          <p className="text-3xl font-bold text-ips-blue mb-4 leading-tight">{contact.heading}</p>
          <p className="text-slate-600 max-w-2xl">{contact.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-ips-gray p-8 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-ips-yellow shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-black text-ips-blue uppercase tracking-[0.2em] mb-2">{contact.addressLabel}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-ips-yellow shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-black text-ips-blue uppercase tracking-[0.2em] mb-2">{contact.phoneLabel}</p>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-slate-600 text-sm hover:text-ips-blue transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.google.com/maps/place/RPS+Razgallah+Photovolta%C3%AFque+%26+Service/data=!4m2!3m1!1s0x0:0xfc85badd1a63c21e?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                {contact.mapButton}
              </a>
              <a href="#estimation" className="btn-primary">
                {contact.cta}
              </a>
            </div>
          </div>

          <div className="border border-slate-200 overflow-hidden min-h-[380px]">
            <iframe
              title={contact.iframeTitle}
              src="https://maps.google.com/maps?q=RPS%20Razgallah%20Photovolta%C3%AFque%20%26%20Service&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
