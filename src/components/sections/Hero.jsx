import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const bgImages = [
  'https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1920&auto=format&fit=crop',
];

// Her görsel için zoom yönü: zoomIn = büyür, zoomOut = küçülür
const zoomDirections = ['zoomIn', 'zoomOut', 'zoomIn', 'zoomOut'];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">

      {/* Background Slideshow with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
              initial={{
                scale: zoomDirections[currentIndex] === 'zoomIn' ? 1 : 1.15,
              }}
              animate={{
                scale: zoomDirections[currentIndex] === 'zoomIn' ? 1.15 : 1,
              }}
              transition={{ duration: 6.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Subtle animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            Profesyonel Reklam & Organizasyon
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            Kulu Nisan
            <span className="block text-amber-400">Reklam Ajansı</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            Hayalinizdeki etkinliği profesyonel dokunuşlarla hayata geçiriyoruz.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-sm text-amber-400/80 tracking-widest uppercase mb-12"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            Düğün · Nişan · Organizasyon · Prodüksiyon
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors duration-300"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              Hizmetleri Keşfet
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="https://wa.me/905331293126"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-colors duration-300"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              Bize Ulaşın
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-12"
        >
          {[
            { number: '500+', label: 'Mutlu Müşteri' },
            { number: '10+', label: 'Yıllık Deneyim' },
            { number: '1000+', label: 'Organizasyon' },
            { number: '24/7', label: 'Destek' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-amber-400 mb-1" style={{ fontFamily: "'Jura', sans-serif" }}>
                {stat.number}
              </p>
              <p className="text-xs text-slate-400 tracking-wide uppercase" style={{ fontFamily: "'Jura', sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
