import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Heart, Music, Users, Gift, Sparkles, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Organizasyon = () => {
  const services = [
    {
      icon: Heart,
      title: 'Düğün Organizasyonu',
      description: 'Hayalinizdeki düğünü profesyonel ekipimizle planlıyoruz. Konsept tasarımından mekan seçimine kadar her detayı düşünüyoruz.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Calendar,
      title: 'Nişan Töreni',
      description: 'Romantik nişan törenleriniz için özel konseptler oluşturuyoruz. Mekan süslemesi, catering ve organizasyon hizmetleri.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Music,
      title: 'Kına Gecesi',
      description: 'Geleneksel kına gecesi organizasyonları. Özel eğlence programları, mekan süslemesi ve profesyonel ekipman.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Users,
      title: 'Sünnet Töreni',
      description: 'Unutulmaz sünnet törenleri için özel organizasyon hizmetleri. Konsept tasarımı, mekan ve catering hizmetleri.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Gift,
      title: 'Kız İsteme Tepsileri',
      description: 'Geleneksel kız isteme törenleri için özel tasarım tepsiler ve organizasyon hizmetleri.',
      image: 'https://images.unsplash.com/photo-1608178398316-48f4d7b8b2c3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Sparkles,
      title: 'Doğum Günü Partisi',
      description: 'Her yaş için özel doğum günü partileri. Temalı partiler, süslemeler ve eğlence programları.',
      image: 'https://plus.unsplash.com/premium_photo-1691752880928-b4faac566573?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Camera,
      title: 'İş Yeri Açılışı',
      description: 'Profesyonel iş yeri açılış organizasyonları. Konsept tasarımı, davetiyeler ve medya yönetimi.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Heart,
      title: 'Evlilik Teklifi Organizasyonu',
      description: 'Unutulmaz evlilik teklifleri için özel konseptler. Romantik mekanlar ve profesyonel organizasyon.',
      image: 'https://images.unsplash.com/photo-1516575182678-b54338450b5b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Music,
      title: 'After Party',
      description: 'Düğün ve özel günler sonrası after party organizasyonları. Profesyonel DJ ve eğlence ekibi.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const portfolio = [
    {
      title: 'Düğün Organizasyonu',
      category: 'Düğün',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Kına Gecesi',
      category: 'Geleneksel',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Nişan Töreni',
      category: 'Nişan',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Doğum Günü',
      category: 'Parti',
      image: 'https://plus.unsplash.com/premium_photo-1691752880928-b4faac566573?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'İş Yeri Açılışı',
      category: 'Kurumsal',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Sünnet Töreni',
      category: 'Geleneksel',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/90 via-rose-900/80 to-purple-900/90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Link 
              to="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Hizmetlerimize Dön
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Tangerine, cursive' }}>
              <span className="bg-gradient-to-r from-white via-pink-200 to-rose-200 bg-clip-text text-transparent">
                Organizasyon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Hayalinizdeki etkinliği profesyonel dokunuşlarla hayata geçiriyoruz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
              Organizasyon Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her türlü özel gününüz için profesyonel organizasyon hizmetleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Tangerine, cursive' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
              Organizasyonlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Başarılı organizasyonlarımızdan bazı örnekler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '200+', label: 'Başarılı Organizasyon' },
              { number: '1000+', label: 'Mutlu Müşteri' },
              { number: '24/7', label: 'Destek' },
              { number: '99%', label: 'Memnuniyet' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
              Özel Gününüzü Unutulmaz Kılın
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Profesyonel organizasyon hizmetleri için bizimle iletişime geçin
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/905331293126', '_blank')}
            >
              WhatsApp ile İletişime Geç
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Organizasyon;
