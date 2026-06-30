import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'İletişim', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col leading-none"
          >
            <span
              className="text-2xl font-black tracking-tight text-slate-900"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              KULU NİSAN
            </span>
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              Reklam Ajansı
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Jura', sans-serif" }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/905331293126"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-500 transition-colors duration-300"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              İletişime Geç
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2.5 text-sm font-medium text-gray-700 hover:text-slate-900"
                  style={{ fontFamily: "'Jura', sans-serif" }}
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
