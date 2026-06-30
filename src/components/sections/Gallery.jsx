import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera, Heart, Calendar, Play } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Düğün Fotoğrafçılığı', category: 'fotoğraf', icon: Camera },
  { src: 'https://plus.unsplash.com/premium_photo-1742418069696-10679d8a7059?q=80&w=1031&auto=format&fit=crop', title: 'Drone Çekimi', category: 'video', icon: Play },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Organizasyon', category: 'organizasyon', icon: Calendar },
  { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Video Prodüksiyon', category: 'video', icon: Play },
  { src: 'https://plus.unsplash.com/premium_photo-1663054798064-68066caef70d?q=80&w=870&auto=format&fit=crop', title: 'Özel Günler', category: 'fotoğraf', icon: Heart },
  { src: 'https://images.unsplash.com/photo-1721719671215-15762f1b9c51?q=80&w=870&auto=format&fit=crop', title: 'Reklam & Pazarlama', category: 'reklam', icon: Camera },
  { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Nişan Töreni', category: 'organizasyon', icon: Heart },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Kına Gecesi', category: 'organizasyon', icon: Calendar },
  { src: 'https://plus.unsplash.com/premium_photo-1691752880928-b4faac566573?q=80&w=869&auto=format&fit=crop', title: 'Doğum Günü', category: 'organizasyon', icon: Calendar },
];

const categories = ['tümü', 'fotoğraf', 'video', 'organizasyon', 'reklam'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('tümü');

  const filtered = activeCategory === 'tümü'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-amber-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Jura', sans-serif" }}>
            Portfolyo
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: "'Jura', sans-serif" }}>
              Son Çalışmalarımız
            </h2>
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: "'Jura', sans-serif" }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((image, index) => (
            <motion.div
              key={image.title + index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-colors duration-300" />

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Jura', sans-serif" }}>
                    {image.title}
                  </h3>
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "'Jura', sans-serif" }}>
                    {image.category}
                  </span>
                </div>

                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full" style={{ fontFamily: "'Jura', sans-serif" }}>
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
