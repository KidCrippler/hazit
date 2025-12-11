import { motion } from 'framer-motion';
import mehazitLogo from '../../assets/hazit.png';
import imagenLogo from '../../assets/imagen-logo.png';

const PartnerLogos = () => {
  return (
    <section className="bg-gradient-to-br from-olive/5 via-white to-coral/5 py-10 md:py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-olive-dark mb-2">
            בשיתוף
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-olive to-coral mx-auto rounded-full"></div>
        </motion.div>

        {/* Overlapping Logo Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Mehazit Logo - Right (RTL) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-2xl overflow-hidden flex items-center justify-center p-6 md:p-8 border-4 border-white"
            >
              <img
                src={mehazitLogo}
                alt="מהחזית לחוזה"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* IMAGEN Logo - Left (RTL) - Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative z-20 -mr-16 md:-mr-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-coral shadow-2xl overflow-hidden flex items-center justify-center p-6 md:p-8 border-4 border-white"
            >
              <img
                src={imagenLogo}
                alt="IMAGEN"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-8 text-sm md:text-base"
        >
          שיתוף פעולה ייחודי למען אנשי ונשות המילואים
        </motion.p>
      </div>
    </section>
  );
};

export default PartnerLogos;

