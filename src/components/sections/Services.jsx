import { motion } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Monitor, 
  Calendar, 
  Music, 
  PartyPopper,
  Smartphone,
  Clapperboard,
  ArrowRight,
  Star,
  MessageCircle
} from 'lucide-react';

const Services = () => {
  const serviceGroups = [
    {
      title: 'Fotoğraf & Video',
      icon: 'https://images.unsplash.com/photo-1720535594328-5e681403350a?q=80&w=80&h=80&auto=format&fit=crop&crop=center&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      services: [
        'Sinematik fotoğraf çekimi',
        'Sinematik video çekimi',
        'Video montaj ve kurgu',
        'Profesyonel düğün fotoğrafçılığı',
        'Drone çekimi'
      ],
      image: 'https://images.unsplash.com/photo-1720535594328-5e681403350a?q=80&w=397&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Dijital & Reklam',
      icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=80&h=80&auto=format&fit=crop&crop=center',
     color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      services: [
        'Reklam hizmetleri',
        'Sosyal medya yönetimi',
        'Web sitesi tasarımı ve geliştirme',
        'Dijital pazarlama',
        'Marka danışmanlığı'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Organizasyon',
      icon: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=80&h=80&auto=format&fit=crop&crop=center',
     color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      services: [
        'Düğün organizasyonu',
        'Nişan töreni',
        'Kına gecesi',
        'Sünnet töreni',
        'Kız isteme tepsileri',
        'Doğum günü partisi',
        'İş yeri açılışı',
        'Evlilik teklifi organizasyonu',
        'After party'
      ],
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Eğlence & Ekip',
      icon: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=80&h=80&auto=format&fit=crop&crop=center',
     color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      services: [
        'Palyaço gösterisi',
        'Davul zurna ekibi',
        'Keman performansı',
        'Nedime ekibi',
        'Gelin çıkış kapısı'
      ],
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

 return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5" />
            <span className="font-medium">Profesyonel Hizmetler</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Hizmetlerimiz
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Size özel profesyonel çözümlerle hayalinizdeki etkinliği gerçeğe dönüştürüyoruz. 
            Her detayı düşünülmüş, unutulmaz deneyimler için buradayız.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${group.borderColor} overflow-hidden`}>
                
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img 
                    src={group.image} 
                    alt={group.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon Image */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg overflow-hidden`}
                  >
                    <img 
                      src={group.icon} 
                      alt={group.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-6" style={{ fontFamily: 'Tangerine, cursive', fontSize: '2rem' }}>
                    {group.title}
                  </h3>
                  
                  {/* Services List */}
                  <ul className="space-y-3 mb-6">
                    {group.services.slice(0, 4).map((service, serviceIndex) => (
                      <motion.li 
                        key={serviceIndex} 
                        className="flex items-center space-x-3"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${group.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm font-medium">{service}</span>
                      </motion.li>
                    ))}
                    {group.services.length > 4 && (
                      <li className="text-gray-500 text-sm italic">
                        +{group.services.length - 4} hizmet daha
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${group.color} text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    Detayları Gör
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
                Özel hizmet mi arıyorsunuz?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                İhtiyaçlarınıza özel çözümler için bizimle iletişime geçin
              </p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white px-3 py-2 rounded-full font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/30 relative overflow-hidden"
                  onClick={() => window.open('https://wa.me/905331293126', '_blank')}
                >
                  {/* Candy Crush parlaklık efekti */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/20 opacity-80"></div>
                  <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-90"></div>
                  <div className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full opacity-70"></div>
                  <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                  
                  <MessageCircle className="w-4 h-4 text-white relative z-10" />
                  <span className="relative z-10">WhatsApp ile anında iletişime geçin</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
