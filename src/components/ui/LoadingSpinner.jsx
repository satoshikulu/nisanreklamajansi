import { motion } from 'framer-motion';

const LoadingSpinner = () => {
 return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
       initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div
          className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
         animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-gray-600 font-medium">Yükleniyor...</p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
