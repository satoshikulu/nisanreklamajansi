import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LoadingSpinner from './components/ui/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde loading'i kapat
   const timer= setTimeout(() => {
      setLoading(false);
    }, 1000);

   const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
   return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <Home />
          
          {/* Back to Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale:1 }}
               exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
                aria-label="Yukarı çık"
              >
                <ArrowUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
