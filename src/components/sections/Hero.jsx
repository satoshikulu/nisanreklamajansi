import { motion } from 'framer-motion';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
   const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 return (
    <section
      id="home"
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-indigo-900/90"></div>
        
        {/* Multiple Image Layers for Parallax Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30 scale-110"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 scale-105"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: -window.innerHeight - 100,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: -20
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white/90 text-sm font-medium">Profesyonel Reklam & Organizasyon Hizmetleri</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ fontFamily: 'Tangerine, cursive' }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Kulu Nisan
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-bold text-white/90">
              Reklam Ajansı
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed turkish-text-tangerine"
            style={{ 
              fontFamily: "'Tangerine', 'Dancing Script', cursive",
              fontSize: 'calc(1.5rem * 2)' /* text-2xl (1.5rem) 2 kat büyütüldü */
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Hayalinizdeki etkinliği profesyonel dokunuşlarla hayata geçiriyoruz. 
            <span className="block text-3xl md:text-5xl font-bold text-yellow-300 mt-2" style={{ fontSize: 'calc(3rem * 1.1)' /* text-5xl (3rem) %10 arttırıldı */ }}>
              Düğün • Nişan • Organizasyon • Prodüksiyon
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Hizmetlerimizi Keşfedin
            </motion.button>
            
            <motion.button
              onClick={() => {
                const element = document.querySelector('#gallery');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Portfolyo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { number: "500+", label: "Mutlu Müşteri" },
              { number: "10+", label: "Yıllık Deneyim" },
              { number: "1000+", label: "Organizasyon" },
              { number: "24/7", label: "Destek" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToServices}
          >
            <span className="text-white/60 text-sm">Kaydırın</span>
            <ChevronDown 
              size={32} 
              className="text-white/80 hover:text-white transition-colors"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
