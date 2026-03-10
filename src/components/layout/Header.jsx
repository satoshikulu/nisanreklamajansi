import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold text-blue-900 relative"
            style={{ fontFamily: 'Tangerine, cursive', fontSize: '3rem' }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Farklı yıldız tozu efektleri */}
            <motion.div
              className="absolute -top-8 -right-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="text-yellow-300 text-lg">⭐</span>
            </motion.div>
            
            <motion.div
              className="absolute -top-6 -left-6"
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="text-blue-300 text-sm">🌟</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-5"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.6, 1.3, 0.6],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-purple-300 text-xs">💫</span>
            </motion.div>
            
            <motion.div
              className="absolute -top-2 -right-8"
              animate={{ 
                opacity: [0.3, 0.9, 0.3],
                scale: [0.8, 1.1, 0.8],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-pink-300 text-sm">✦</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-5"
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2.8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="text-cyan-300 text-xs">⋆</span>
            </motion.div>
            
            {/* Logo text - tamamen açık */}
            <span className="relative z-10">Kulu Nisan</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
