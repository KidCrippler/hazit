import { motion } from 'framer-motion';
import handshakeImg from '../assets/handshake.jpeg';
import hazitLogo from '../../assets/hazit.jpeg';
import barzelLogo from '../../assets/barzel.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${handshakeImg})` }}
      />
      
      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/85 via-brand-green-light/80 to-brand-green/85" />
      
      {/* Subtle decorative shapes for depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
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
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            מהחזית לחוזה בשיתוף קהילת ברזל
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold text-white">
            מזמינים אתכם לכנס
          </p>
          
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            מעסיקים למען אנשי ונשות המילואים
          </p>
          
          <p className="text-base md:text-lg text-white max-w-4xl mx-auto leading-relaxed">
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

