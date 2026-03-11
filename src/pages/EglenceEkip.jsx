import { motion } from 'framer-motion';
import { ArrowLeft, Music, Users, Mic2, Drum, Gamepad2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const EglenceEkip = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Palyaço Gösterisi',
      description: 'Çocukların seveceği eğlenceli palyaço gösterileri. İnteraktif oyunlar, sihirbazlık ve bubble show ile unutulmaz anlar.',
      image: 'https://as2.ftcdn.net/v2/jpg/00/24/44/65/1000_F_24446556_CDgGuARl9dTSJXUzQJvgjjfLHEGKKvJM.jpg'
    },
    {
      icon: Drum,
      title: 'Davul Zurna Ekibi',
      description: 'Geleneksel düğün ve özel günler için profesyonel davul zurna ekibi. Coşkulu ve enerjik müzik performansları.',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Mic2,
      title: 'Keman Performansı',
      description: 'Romantik ve özel anlar için profesyonel keman performansları. Klasik, modern ve Ottoman eserleri.',
      image: 'https://as1.ftcdn.net/v2/jpg/00/90/08/00/1000_F_90080029_xb6aRlKX0pwlD6fmPELB1ytl4Wu2z0Kn.jpg'
    },
    {
      icon: Users,
      title: 'Nedime Ekibi',
      description: 'Geleneksel düğün törenleri için profesyonel nedime ekibi. Gelin çıkış kapısı, özel dans gösterileri ve tören organizasyonu.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80'
    },
    {
      icon: Music,
      title: 'Gelin Çıkış Kapısı',
      description: 'Düğünleriniz için özel tasarım gelin çıkış kapıları. Geleneksel ve modern tasarımlar ile unutulmaz giriş.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const portfolio = [
    {
      title: 'Palyaço Gösterisi',
      category: 'Çocuk Eğlencesi',
      image: 'https://as2.ftcdn.net/v2/jpg/00/24/44/65/1000_F_24446556_CDgGuARl9dTSJXUzQJvgjjfLHEGKKvJM.jpg'
    },
    {
      title: 'Davul Zurna Performansı',
      category: 'Canlı Müzik',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Keman Performansı',
      category: 'Müzik',
      image: 'https://as1.ftcdn.net/v2/jpg/00/90/08/00/1000_F_90080029_xb6aRlKX0pwlD6fmPELB1ytl4Wu2z0Kn.jpg'
    },
    {
      title: 'Nedime Ekibi',
      category: 'Düğün',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Gelin Kapısı',
      category: 'Dekorasyon',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Çocuk Partisi',
      category: 'Organizasyon',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-red-900/80 to-yellow-900/90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"></div>
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
              <span className="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                Eğlence & Ekip
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Etkinliklerinize renk katacak profesyonel ekipman ve eğlence hizmetleri
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
              Eğlence Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her türlü etkinlik için profesyonel eğlence ekibi ve ekipman hizmetleri
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
      <section className="py-20 px-4 bg-orange-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
              Eğlence Gösterilerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Başarılı eğlence organizasyonlarımızdan bazı örnekler
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Profesyonel Ekip',
                description: 'Deneyimli ve enerjik ekip üyeleriyle unutulmaz performanslar'
              },
              {
                icon: Music,
                title: 'Kaliteli Ekipman',
                description: 'Profesyonel ses ve ışık sistemleri ile kusursuz organizasyon'
              },
              {
                icon: Sparkles,
                title: 'Eğlenceli Gösteriler',
                description: 'Her yaş grubuna uygun, interaktif ve eğlenceli performanslar'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white shadow-lg"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              { number: '150+', label: 'Eğlence Gösterisi' },
              { number: '50+', label: 'Profesyonel Ekip' },
              { number: '24/7', label: 'Destek' },
              { number: '100%', label: 'Eğlence Garantisi' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-orange-600 mb-2">
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
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
              Etkinliğinize Eğlence Katın
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Profesyonel eğlence ekibi ve hizmetleri için bizimle iletişime geçin
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
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

export default EglenceEkip;
