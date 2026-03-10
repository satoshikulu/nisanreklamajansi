import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log('Form gönderildi:', formData);
    alert('Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Tangerine, cursive' }}>
            Bize Ulaşın
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projeleriniz için bizimle iletişime geçin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Tangerine, cursive', fontSize: '1.75rem' }}>İletişim Bilgileri</h3>
              
              <a 
                href="tel:05331293126"
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors mb-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telefon</p>
                  <p className="text-lg font-semibold text-gray-900">0 533 129 31 26</p>
                </div>
              </a>

              <a 
                href="mailto:selmatasan697@gmail.com"
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors mb-4"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">E-posta</p>
                  <p className="text-lg font-semibold text-gray-900">selmatasan697@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Konum</p>
                  <p className="text-lg font-semibold text-gray-900">Kulu, Konya</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49684.76785341347!2d33.0394!3d39.0508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34c8b0a9b3b3b%3A0x4b3b3b3b3b3b3b3b!2sKulu%2C%20Konya!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Kulu Konum"
              ></iframe>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Tangerine, cursive', fontSize: '1.75rem' }}>Mesaj Gönderin</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                   placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                   placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                   placeholder="Projeniz hakkında bilgi verin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Mesajı Gönder</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
