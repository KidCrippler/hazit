import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark text-white py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">מהחזית לחוזה</h3>
            <p className="text-sm opacity-90">קהילת ברזל - תומכים במילואימניקים</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-right">
            <a href="mailto:contact@hazit.org" className="flex items-center gap-2 hover:text-brand-beige transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@hazit.org</span>
            </a>
            <a href="tel:+972501234567" className="flex items-center gap-2 hover:text-brand-beige transition-colors">
              <Phone className="w-5 h-5" />
              <span>050-123-4567</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-white/20 text-center text-sm opacity-75"
        >
          <p>© 2025 מהחזית לחוזה - קהילת ברזל. כל הזכויות שמורות.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

