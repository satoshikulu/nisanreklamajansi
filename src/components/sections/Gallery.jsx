import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera, Heart, Calendar, MapPin, Play } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Düğün Fotoğrafçılığı',
      description: 'Unutulmaz anılar',
      category: 'fotoğraf',
      icon: Camera
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1742418069696-10679d8a7059?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Drone Çekimi',
      description: 'Kusursuz hava görüntüleri',
      category: 'video',
      icon: Play
    },
    {
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Organizasyon',
      description: 'Profesyonel etkinlik yönetimi',
      category: 'organizasyon',
      icon: Calendar
    },
    {
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Video Prodüksiyon',
      description: 'Sinematik kalite',
      category: 'video',
      icon: Play
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1663054798064-68066caef70d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Özel Günler',
      description: 'Anılar ölümsüzleşiyor',
      category: 'fotoğraf',
      icon: Heart
    },
    {
      src: 'https://images.unsplash.com/photo-1721719671215-15762f1b9c51?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Reklam & Pazarlama',
      description: 'Markanız için en iyisi',
      category: 'reklam',
      icon: Camera
    },
    {
      src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Nişan Töreni',
      description: 'Romantik anlar',
      category: 'organizasyon',
      icon: Heart
    },
    {
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Kına Gecesi',
      description: 'Geleneksel eğlence',
      category: 'organizasyon',
      icon: Calendar
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1691752880928-b4faac566573?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Doğum Günü',
      description: 'Eğlenceli partiler',
      category: 'organizasyon',
      icon: Calendar
    }
  ];

  const categories = ['tümü', 'fotoğraf', 'video', 'organizasyon', 'reklam'];
  const [activeCategory, setActiveCategory] = useState('tümü');

  const filteredImages = activeCategory === 'tümü' 
    ? images 
    : images.filter(img => img.category === activeCategory);

 return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
            Son Çalışmalarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel ekibimizle hayata geçirdiğimiz özel projelerden bazıları
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                      <image.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Tangerine, cursive', fontSize: '1.5rem' }}>{image.title}</h3>
                  <p className="text-gray-200 text-sm mb-3">{image.description}</p>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
                    Detayları Gör
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Daha Fazla Görsel
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
