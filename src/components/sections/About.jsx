import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const stats = [
  { icon: Award, number: '10+', label: 'Yıllık Deneyim' },
  { icon: Users, number: '500+', label: 'Mutlu Müşteri' },
  { icon: Target, number: '1000+', label: 'Tamamlanan Proje' },
  { icon: Heart, number: '%100', label: 'Müşteri Memnuniyeti' },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Jura', sans-serif" }}>
              Biz kimiz
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "'Jura', sans-serif" }}>
              Hakkımızda
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8" style={{ fontFamily: "'Jura', sans-serif" }}>
              Kulu Nisan Reklam Ajansı olarak, yaratıcı çözümler ve profesyonel hizmetlerle
              müşterilerimizin hayallerini gerçeğe dönüştürüyoruz. 10 yılı aşkın deneyimimizle
              bölgenin en güvenilir ajansı olmayı sürdürüyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <p className="text-2xl font-black text-slate-900 mb-1" style={{ fontFamily: "'Jura', sans-serif" }}>
                    {stat.number}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide" style={{ fontFamily: "'Jura', sans-serif" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Jura', sans-serif" }}>
                Misyonumuz
              </p>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Jura', sans-serif" }}>
                Fark yaratan hizmet
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed" style={{ fontFamily: "'Jura', sans-serif" }}>
                Müşterilerimize en kaliteli reklam, organizasyon ve prodüksiyon hizmetlerini sunarak
                başarılarına katkıda bulunmak ve sektörde fark yaratmak.
              </p>
            </div>

            <div className="bg-amber-400 p-8 rounded-2xl">
              <p className="text-slate-900/60 text-xs font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Jura', sans-serif" }}>
                Vizyonumuz
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Jura', sans-serif" }}>
                Bölgenin lideri
              </h3>
              <p className="text-slate-800 text-sm leading-relaxed" style={{ fontFamily: "'Jura', sans-serif" }}>
                Bölgenin en güvenilir, yenilikçi ve tercih edilen reklam ajansı olmak,
                sürekli gelişim ve müşteri memnuniyeti odaklı çalışmak.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
