import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const serviceGroups = [
  {
    title: 'Fotoğraf & Video',
    color: 'bg-slate-800',
    accent: 'text-amber-400',
    icon: '📷',
    services: ['Sinematik fotoğraf çekimi', 'Sinematik video çekimi', 'Video montaj ve kurgu', 'Düğün fotoğrafçılığı', 'Drone çekimi'],
    link: '/foto-video',
    image: 'https://images.unsplash.com/photo-1720535594328-5e681403350a?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Dijital & Reklam',
    color: 'bg-slate-800',
    accent: 'text-amber-400',
    icon: '📱',
    services: ['Reklam hizmetleri', 'Sosyal medya yönetimi', 'Web sitesi tasarımı', 'Dijital pazarlama', 'Marka danışmanlığı'],
    link: '/dijital-reklam',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Organizasyon',
    color: 'bg-slate-800',
    accent: 'text-amber-400',
    icon: '🎊',
    services: ['Düğün organizasyonu', 'Nişan töreni', 'Kına gecesi', 'Sünnet töreni', 'Doğum günü partisi', 'İş yeri açılışı', '+3 hizmet daha'],
    link: '/organizasyon',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'Eğlence & Ekip',
    color: 'bg-slate-800',
    accent: 'text-amber-400',
    icon: '🎵',
    services: ['Palyaço gösterisi', 'Davul zurna ekibi', 'Keman performansı', 'Nedime ekibi', 'Gelin çıkış kapısı'],
    link: '/eglence-ekip',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Jura', sans-serif" }}>
            Ne yapıyoruz
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: "'Jura', sans-serif" }}>
              Hizmetlerimiz
            </h2>
            <p className="text-gray-500 max-w-md text-base leading-relaxed" style={{ fontFamily: "'Jura', sans-serif" }}>
              Her detayı düşünülmüş, unutulmaz deneyimler için profesyonel çözümler sunuyoruz.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-300" />
                  <span className="absolute top-4 left-4 text-2xl">{group.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "'Jura', sans-serif" }}
                  >
                    {group.title}
                  </h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {group.services.slice(0, 5).map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500" style={{ fontFamily: "'Jura', sans-serif" }}>
                        <span className="w-1 h-1 bg-amber-400 rounded-full flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link to={group.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
                      style={{ fontFamily: "'Jura', sans-serif" }}
                    >
                      Detayları Gör
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-slate-900 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2" style={{ fontFamily: "'Jura', sans-serif" }}>
              Özel bir hizmet mi arıyorsunuz?
            </h3>
            <p className="text-slate-400 text-base" style={{ fontFamily: "'Jura', sans-serif" }}>
              İhtiyaçlarınıza özel çözümler için hemen yazın.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open('https://wa.me/905331293126', '_blank')}
            className="flex-shrink-0 bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 hover:bg-amber-300 transition-colors duration-300"
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp ile Yazın
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
