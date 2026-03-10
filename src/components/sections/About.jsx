import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '10+', label: 'Yıllık Deneyim' },
    { icon: Users, number: '500+', label: 'Mutlu Müşteri' },
    { icon: Target, number: '1000+', label: 'Tamamlanan Proje' },
    { icon: Heart, number: '%100', label: 'Müşteri Memnuniyeti' },
  ];

 return (
  <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kulu Nisan Reklam Ajansı olarak, yaratıcı çözümler ve profesyonel hizmetlerle müşterilerimizin hayallerini gerçeğe dönüştürüyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg"
          >
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive', fontSize: '1.75rem' }}>Misyonumuz</h3>
            <p className="text-blue-100 leading-relaxed">
              Müşterilerimize en kaliteli reklam, organizasyon ve prodüksiyon hizmetlerini sunarak, 
              onların başarılarına katkıda bulunmak ve sektörde fark yaratmak.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Tangerine, cursive', fontSize: '1.75rem' }}>Vizyonumuz</h3>
            <p className="text-purple-100 leading-relaxed">
              Bölgenin en güvenilir, en yenilikçi ve en tercih edilen reklam ajansı olmak, 
              sürekli gelişim ve müşteri memnuniyeti odaklı çalışmak.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
