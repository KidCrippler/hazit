import { motion } from 'framer-motion';
import handshakeImg from '../assets/handshake.jpeg';
import hazitLogo from '../../assets/hazit.jpeg';
import barzelLogo from '../../assets/barzel.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${handshakeImg})` }}
      />

      {/* Green Gradient Overlay - Lighter for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green/60 via-transparent to-brand-green-dark/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-12 gap-0"
        >
          {/* Hazit Logo - Right */}
          <div className="relative z-10 w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden">
            <img
              src={hazitLogo}
              alt="מהחזית לחוזה"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Barzel Logo - Left */}
          <div className="relative -mr-10 w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden">
            <img
              src={barzelLogo}
              alt="קהילת ברזל"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            מהחזית לחוזה בשיתוף קהילת ברזל
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            מזמינים אתכם לכנס מעסיקים
          </p>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            למען משרתי ומשרתות המילואים
          </p>

          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            ההזדמנות שלכם להתחבר למעסיקים מובילים
            <br />
            בחזרה לשוק העבודה
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

