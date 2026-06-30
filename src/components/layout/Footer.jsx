import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="text-xl font-black tracking-tight" style={{ fontFamily: "'Jura', sans-serif" }}>
                KULU NİSAN
              </p>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400" style={{ fontFamily: "'Jura', sans-serif" }}>
                Reklam Ajansı
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "'Jura', sans-serif" }}>
              Profesyonel reklam, organizasyon ve prodüksiyon hizmetleri.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-6" style={{ fontFamily: "'Jura', sans-serif" }}>
              İletişim
            </h3>
            <div className="space-y-3">
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Jura', sans-serif" }}>Selma Tasan</p>
              <a href="tel:05331293126" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm" style={{ fontFamily: "'Jura', sans-serif" }}>
                <Phone size={15} className="text-amber-400" />
                0 533 129 31 26
              </a>
              <a href="mailto:selmatasan697@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm" style={{ fontFamily: "'Jura', sans-serif" }}>
                <Mail size={15} className="text-amber-400" />
                selmatasan697@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm" style={{ fontFamily: "'Jura', sans-serif" }}>
                <MapPin size={15} className="text-amber-400" />
                Kulu, Konya
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-6" style={{ fontFamily: "'Jura', sans-serif" }}>
              Hizmetler
            </h3>
            <ul className="space-y-2">
              {['Fotoğraf & Video', 'Dijital & Reklam', 'Organizasyon', 'Eğlence & Ekip'].map((s) => (
                <li key={s}>
                  <span className="text-slate-400 text-sm hover:text-white transition-colors cursor-default" style={{ fontFamily: "'Jura', sans-serif" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs" style={{ fontFamily: "'Jura', sans-serif" }}>
            © {currentYear} Kulu Nisan Reklam Ajansı. Tüm hakları saklıdır.
          </p>
          <a
            href="https://wa.me/905331293126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400 hover:text-amber-300 transition-colors font-semibold tracking-wide"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            WhatsApp ile İletişime Geç →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
