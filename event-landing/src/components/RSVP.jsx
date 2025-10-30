import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const RSVP = () => {
  return (
    <section className="bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            המקומות מוגבלים!
          </h2>
          
          <p className="text-xl text-white max-w-2xl mx-auto">
            הירשמו עכשיו ותבטיחו את מקומכם באירוע
          </p>
          
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-brand-green px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-shadow"
          >
            <ArrowLeft className="w-6 h-6" />
            <span>הרשמה לאירוע</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;

