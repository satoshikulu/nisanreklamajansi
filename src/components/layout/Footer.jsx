import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

 return (
    <footer className="bg-purple-200 text-purple-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive', fontSize: '2.8rem' }}>Kulu Nisan Reklam Ajansı</h3>
            <p className="text-purple-700 text-base">
              Profesyonel reklam, organizasyon ve prodüksiyon hizmetleri.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive', fontSize: '2.8rem' }}>İletişim</h3>
            <div className="space-y-2">
              <a 
                href="tel:05331293126" 
                className="flex items-center space-x-2 text-purple-700 hover:text-purple-900 transition-colors"
              >
                <Phone size={18} />
                <span className="text-purple-900">0 533 129 31 26</span>
              </a>
              <a 
                href="mailto:selmatasan697@gmail.com" 
                className="flex items-center space-x-2 text-purple-700 hover:text-purple-900 transition-colors"
              >
                <Mail size={18} />
                <span className="text-purple-900">selmatasan697@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-purple-700 text-base">
              <span className="text-purple-900">© {currentYear} Kulu Nisan Reklam Ajansı.<br />
              Tüm hakları saklıdır.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
