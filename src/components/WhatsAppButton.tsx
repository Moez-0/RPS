import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '21627139263';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact RPS on WhatsApp"
      className="fixed bottom-7 left-7 z-40 inline-flex items-center gap-2 rounded-full bg-ips-blue text-white px-4 py-3 shadow-xl hover:bg-ips-yellow hover:text-ips-blue transition-all"
    >
      <MessageCircle size={18} />
      <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
    </a>
  );
}